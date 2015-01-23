var express = require('express');
var morgan = require('morgan');

// init express instance and set morgan middleware
var app = express();
app.use(morgan('dev'));

// listen for port 3000;
app.listen(3000, function() {
	console.log('server listenning');
});

app.get('/', function(req, res) {
	console.log('hello!');
	res.end();
});