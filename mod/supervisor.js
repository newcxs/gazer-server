var fs = require("fs");
var cp = require("child_process");
var config = require("../config");

exports.add = function (name, data){
    var filePath = config.supervisor.dir + name + config.supervisor.ext;
    if (!fs.existsSync(filePath)){
        var writeData = null;
        writeData += "[program:" + name + "]\n";
        for (var key in data){
            writeData += key + "=" + data[key] + "\n";
        }
        fs.writeFile(filePath, writeData, function (err){
            if (err){
                return {
                    "code": -1,
                    "msg": "File write error"
                };
            } else {
                cp.exec("sudo supervisorctl update");
                return {
                    "code": 1,
                    "msg": "Task add successful"
                };
            }
        });
    } else {
        return {
            "code": -1,
            "msg": "Task existed"
        };
    }
}
