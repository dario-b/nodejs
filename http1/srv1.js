// Load the http module to create an http server.
var http = require('http');
var fs = require('fs');

var port = 8000;

var server = http.createServer(function (request, response) {
  fs.readFile('./index.html', function(err, data) {
    response.end(data);
  });
});

server.listen(port, '192.168.0.108');

// Put a friendly message on the terminal
console.log("Server running at 192.168.0.108 on port " + port);

