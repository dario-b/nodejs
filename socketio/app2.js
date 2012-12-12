var app = require('http').createServer(handler)
  , url= require('url')
  , fs = require('fs')
  , io = require('socket.io').listen(app);
  
app.listen(5000);

console.log('Server started. Listening on port 5000');

// Http handler function
function handler (req, res) {
    
    // Using URL to parse the requested URL
    var path = url.parse(req.url).pathname;
    
    // Managing the root route
    if (path == '/') {
        index = fs.readFile('index.html', 
            function(error,data) {
                
                if (error) {
                    res.writeHead(500);
                    return res.end("Error: unable to load index.html");
                }
                
                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            });
    // Managing the route for the javascript files
    } else if (path == '/weather.html') {
index = fs.readFile('weather.html',
            function(error,data) {

                if (error) {
                    res.writeHead(500);
                    return res.end("Error: unable to load index.html");
                }

                res.writeHead(200,{'Content-Type': 'text/html'});
                res.end(data);
            });



}  else if( /\.(js)$/.test(path) ) {
        index = fs.readFile(__dirname+path, 
            function(error,data) {
                
                if (error) {
                    res.writeHead(500);
                    return res.end("Error: unable to load " + path);
                }
                
                res.writeHead(200,{'Content-Type': 'text/plain'});
                res.end(data);
            });
    } else if(/\.(css)$/.test(path)) { 
    index = fs.readFile(__dirname+path,
            function(error,data) {

                if (error) {
                    res.writeHead(500);
                    return res.end("Error: unable to load " + path);
                }

                res.writeHead(200,{'Content-Type': 'text/plain'});
                res.end(data);
            });


} else if(/\.(png)$/.test(path)) {

index = fs.readFile(__dirname+path,
            function(error,data) {

                if (error) {
                    res.writeHead(500);
                    return res.end("Error: unable to load " + path);
                }

                res.writeHead(200,{'Content-Type': 'text/plain'});
                res.end(data);
            });

 

} else {
        res.writeHead(404);
        res.end("Error: 404 - File not found.");
    }
    
}

// Web Socket Connection
io.sockets.on('connection', function (socket) {
 
  console.log("Client has connected");
    
  setInterval(function() {
    var num = Math.floor(Math.random() * (100 - 1) + 1);
    socket.emit('sensor',{data: num});
    console.log("Sent");
  }, 5000);

  
});

