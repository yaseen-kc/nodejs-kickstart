// Importing the 'http' module
const http = require("http");

// Making an HTTP GET request to the specified URL
http.get("http://api.open-notify.org/astros.json", (resp) => {
  // Initializing an empty string to store the response data
  let data = "";

  // Event listener for the 'data' event, triggered when receiving data
  resp.on("data", (chunk) => {
    // Appending received data to the 'data' variable
    data += chunk;
  });
  // Event listener for the 'end' event, triggered when the response is complete
  resp.on("end", () => {
    // Parsing the received JSON data
    let jsonData = JSON.parse(data);

    // Logging the parsed JSON data to the console
    console.log(jsonData);
  });
});
