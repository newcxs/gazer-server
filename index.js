var config = new Object();
config.global = require("./config/global");
var http = require('http');

http.createServer(function (req, res){
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(config.global.port, config.global.ip);

console.log("Server running at http://" + config.global.ip + ":" + config.global.port + "/");
