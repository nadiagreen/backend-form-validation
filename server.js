/*var express = require('express');
var app = express();


app.use(express.static('public'));


app.get('/', function (req, res) {
    res.send('Hello, Shurik!');
});

app.post('/registration', function (req, res) {
    console.log(req.body)
    res.send('registration is completed') 
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
*/
 var http = require('http');
 http.createServer(function(req, res) {
     res.writeHead(200, {'Content-Type': 'text/plain'});
     res.end('Hello New Server\n');
 }).listen(8080);
 console.log('Server running on port 8080.');
 var express = require('express');
 var app = express();
 app.use(express.static("Desktop/Projects/backend-form-validation" + '/public' ));
 app.listen(8080);