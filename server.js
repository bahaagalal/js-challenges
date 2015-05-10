var express = require('express');
var ejs = require('ejs');
var http = require('http');

var app = express();
var server = http.Server(app);

app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(req, res){
	res.render('index');
});

app.get('/challenge/:id', function(req, res){
	res.render('challenge', {
		id: req.params.id
	});
});

server.listen(3001);
