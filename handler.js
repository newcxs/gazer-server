var config = require("./config");
var querystring = require("querystring");
var md5 = require("crypto").createHash("md5");

var ignoreMethod = function (req, res){
    if (req.method != "POST") {
        res.writeHead(403);
        res.end(config.error.no403);
    }
}

var receiveData = function (req, res, callback){
    var post = "";
    req.on("data", function (chunk){
        post += chunk;
    });
    req.on("end", function (){
        post = querystring.parse(post);
        callback(req, res, post);
    });
}

var checkData = function (req, res, data, key, callback){
    var genKey = md5.update(data + config.api.key).digest("hex");
    if (genKey != key) {
        res.writeHead(403);
        res.end(config.error.no403);
    }
    data = JSON.parse(data);
    callback(req, res, data);
}

var parseData = function (req, res, data, callback){
    checkData(req, res, data.data, data.key, callback);
}

var callMod = function (req, res, mod, func, data){}

var dispatch = function (req, res, data){
    res.end(require("util").inspect(data));
}

exports.httpServer = function (req, res){
    ignoreMethod(req, res);
    receiveData(req, res, function (req, res, data){
        res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"});
        data = parseData(req, res, data, dispatch);
    });
}
