'use strict'

//https://www.cnblogs.com/xbblogs/p/9367764.html

var https = require('https')
    ,fs = require("fs");

var options = {
    key: fs.readFileSync('./server.key'),
    cert: fs.readFileSync('./server.crt')
};

https.createServer(options, function(req,res){
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.end('HelloWorld')
}).listen(3011, '0.0.0.0',function () {
    console.log('Https server listening on port ' + 3011);
});