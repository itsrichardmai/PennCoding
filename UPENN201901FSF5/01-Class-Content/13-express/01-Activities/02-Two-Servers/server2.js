var http = require("http");

var PORT = 7500;

function handleRequest(request, response) {

    // Send the below string to the client when the user visits the PORT URL
    response.end("It Works!! Path Hit: " + request.url);
  }
  
var server = http.createServer(handleRequest);

server.listen(PORT, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);

    console.log("Inspirational Quote #2")

  });
