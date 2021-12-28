const { RSA_PKCS1_OAEP_PADDING } = require('constants');
var http = require('http'); // Import Node.js core module

var server = http.createServer(function (req, res) {   //create web server
        
	var path = req.url
	var port = path.substring(1)
    	var loc = "https://127.0.0.1:" + port
        // set response header
        res.writeHead(302, { 'Location': loc }); 
        
        // set response content    
        res.write(path);
        res.end();
    

});

server.listen(process.env.PORT); //6 - listen for any incoming requests

console.log('Node.js web server is running..')
