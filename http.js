var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("hello \n");
	res.write("world \n");
	res.end();
});

server.listen(4000);

console.log('Server is running on 4000');
