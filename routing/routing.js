// Import the 'http' module to create an HTTP server.
const http = require("http")

// Define an object 'routes' to store different routes and their corresponding functions.
const routes = {
  // Define the root route ("/") and its associated function 'index'.
  "/": function index(request, response) {
    // Send a 200 OK status code in the response header.
    response.writeHead(200)

    // End the response with the message "Node Routing".
    response.end("Node Routing")
  },

  // Define the "/aboutUs" route and its associated function 'aboutUs'.
  "/aboutUs": function aboutUs(request, response) {
    // End the response with the message "About Us".
    response.end("About Us")
  },
}

// Create an HTTP server using the 'createServer' method.
http
  .createServer(function (req, res) {
    // Check if the requested URL exists as a key in the 'routes' object.
    if (req.url in routes) {
      // If the route exists, call the corresponding function from the 'routes' object.
      return routes[req.url](req, res)
    }
  })
  // Make the server listen on port 8000.
  .listen(8000)
