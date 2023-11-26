// create web server
// node comments.js

var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res) {
	switch(req.method) {
		case 'POST':
			var item = '';
			req.setEncoding('utf8');
			req.on('data', function(chunk) {
				item += chunk;
			});
			req.on('end', function() {
				items.push(item);
				res.end('OK\n');
			});
			break;
		case 'GET':
			var body = items.map(function(item, i) {
				return i + ') ' + item;
			}).join('\n');
			res.setHeader('Content-Length', Buffer.byteLength(body));
			res.setHeader('Content-Type', 'text/plain; charset="utf-8"');
			res.end(body);
			break;
	}
});

server.listen(3000);

// $ curl -d 'hello world' http://localhost:3000
// OK
// $ curl http://localhost:3000
// 0) hello world
// $ curl -d 'hello node' http://localhost:3000
// OK
// $ curl http://localhost:3000
// 0) hello world
// 1) hello node

// Path: comments.js
// create web server
// node comments.js

var http = require('http');
var url = require('url');
var items = [];

var server = http.createServer(function(req, res) {
	switch(req.method) {
		case 'POST':
			var item = '';
			req.setEncoding('utf8');
			req.on('data', function(chunk) {
				item += chunk;
			});
			req.on('end', function() {
				items.push(item);
				res.end('OK\n');
			});
			break;
		case 'GET':
			items.forEach(function(item, i) {
				res.write(i + ') ' + item + '\n');
			});
			res.end();
			break;
	}
});

server.listen(3000);

// $ curl -d 'hello world' http://localhost:3000
// OK
// $ curl http://localhost:3000
// 0) hello world
// $ curl -d 'hello node' http://localhost:3000
// OK
// $ curl http://localhost:3000
// 0) hello world
// 1) hello node