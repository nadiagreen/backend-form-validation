
var fs = require('fs');
var http = require('http');
var server = http.createServer(function(req, res) {
    console.log("URL stranitsi: " + req.url);
    res.writeHead(200, {'Content-type': 'application/json; charset=utf-8'});
 
    var obj = {
        model: 'Audi',
        speed: '234.5', 
        wheels: 4
    };
    res.end(JSON.stringify(obj));
});
 server.listen(3000, '127.0.0.1');
 console.log("Mi otslezhivaem port 3000");
