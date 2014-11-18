var configure = {
    "server": "0.0.0.0",
    "server_port": 8388,
    "local_address": "127.0.0.1",
    "local_port": 1080,
    "password": "mypassword",
    "timeout": 300,
    "method": "aes-256-cfb",
    "fast_open": false,
    "workers": 1
};

var jsonify = JSON.stringify(configure);

console.log(jsonify);
