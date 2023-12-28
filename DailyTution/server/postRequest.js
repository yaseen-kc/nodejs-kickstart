// Importing the 'https' module for making secure HTTP requests.
const http = require("https");

// Creating a JSON string representing user data with 'name' and 'Job' properties.
const data = JSON.stringify({
  name: "John Doe",
  Job: "Content Writer",
});

// Configuring the options for the HTTP request.
const options = {
  hostname: "reqres.in",
  path: "/api/users",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
};

// Creating an HTTP request with the specified options.
const req = http.request(options, (res) => {
  let body = "";

  // Logging the HTTP status code received from the server.
  console.log("Status Code:", res.statusCode);

  // Handling data chunks received from the server.
  res.on("data", (chunk) => {
    body += chunk;
  });

  // Logging the parsed response body when the data reception is complete.
  res.on("end", () => {
    console.log("Body:", JSON.parse(body));
  });
});

// Writing the user data to the request.
req.write(data);

// Completing the request, indicating that no more data will be sent.
req.end();
