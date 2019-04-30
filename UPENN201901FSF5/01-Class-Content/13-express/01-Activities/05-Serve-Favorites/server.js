var http = require("http");

var fs = require("fs");

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {

    console.log(req.url);

    switch(req.url) {
        
        case "/favoritefood.html":
        
        break;

        case "/favoritemovies.html":

        break;
        
        case "/favoriteCSSframework.html":
        break;

        default: 
        return display404(path, req, res);
        
      }

    fs.readFile(__dirname + "/home.html", function(err, data) {
        
        // We then respond to the client with the HTML page by specifically telling the browser that we are delivering
        // an html file.
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

server.listen(PORT, function() {
    
    console.log("Server is listening on Port: " + PORT);

})

