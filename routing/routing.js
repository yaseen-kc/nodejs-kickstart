// Importing the 'http' module for creating an HTTP server.
const http = require("http");
// Function to handle requests to the root ("/") endpoint.
function index(request, response) {
  // Setting the HTTP response status code to 200 (OK).
  response.writeHead(200);
  // Sending the response content as "Node Routing".
  response.end("Node Routing");
}
function aboutUs(request, response) {
  response.end("About Us");
}
// Creating an HTTP server and defining a callback function to handle requests.
http
  .createServer(function (req, res) {
    // Checking if the requested URL is the root ("/") endpoint.
    if (req.url === "/") {
      // Invoking the 'index' function to handle the request.
      return index(req, res);
    }
    if (req.url === "/aboutUs") {
      return aboutUs(req, res);
    }
  })
  // Listening on port 8000 for incoming HTTP requests.
  .listen(8000);
