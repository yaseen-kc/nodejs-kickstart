// Importing the 'http' module
const http = require("http");

// Setting the hostname and port for the server
const hostname = "127.0.0.1";
const port = 3000;

// Creating an HTTP server using the 'http' module
const server = http.createServer((req, res) => {
  // Handling incoming requests

  // Setting the HTTP status code to 200 (OK)
  res.statusCode = 200;

  // Setting the response content type to plain text
  res.setHeader("Content-Type", "text/plain");

  // Sending the response body
  res.end("Welcome to HTTP server");
});

// Making the server listen on the specified port and hostname
server.listen(port, hostname, () => {
  // Callback function executed when the server starts listening

  // Logging a message to the console indicating the server is running
  // and specifying the URL (http://${hostname}:${port}/)
  console.log(`Server running at http://${hostname}:${port}/`);
});
