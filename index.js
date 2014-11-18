var config = require("./config");
var handler = require("./handler");
var http = require('http');

http.createServer(function (req, res){
    handler.httpServer(req, res);
}).listen(config.global.port, config.global.ip);

console.log("Gazer-Server running at http://"
             + config.global.ip + ":"
             + config.global.port + "/");
