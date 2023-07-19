// Create web server
var http = require("http");

http.createServer(function(request, response)
{
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);

// Console will print the message
console.log("Server running at http://");