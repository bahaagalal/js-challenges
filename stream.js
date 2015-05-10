var http = require('http');

var server = http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write("hello \n");
	setTimeout(function(){
		res.write("world \n");
		res.end();
	}, 10000);
});

server.listen(4000);

console.log('Server is running on 4000');
