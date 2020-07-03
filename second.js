'use strict'


var https = require('http')
    ,fs = require("fs");

var options = {
    key: fs.readFileSync('./privatekey.pem'),
    cert: fs.readFileSync('./certificate.pem')
};

https.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('HelloWorld')
}).listen(3012, '0.0.0.0',function () {
    console.log('Https server listening on port ' + 3012);
});