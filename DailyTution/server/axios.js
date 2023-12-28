// Importing the 'axios' library, which is a popular HTTP client for making requests.
const axios = require("axios");

// Creating a JSON string representing user data with 'name' and 'Job' properties.
const data = JSON.stringify({
  name: "John Doe",
  Job: "Content Writer",
});

// Making a POST request to the "https://reqres.in/api/users" endpoint with the user data.
axios
  .post("https://reqres.in/api/users", data)
  .then((res) => {
    // Logging the HTTP status code received from the server.
    console.log(`Status Code: ${res.status}`);

    // Logging the response body in a readable JSON format.
    console.log(`Body: ${JSON.stringify(res.data)}`);
  })
  .catch((err) => {
    // Logging any errors that occurred during the HTTP request.
    console.log(err);
  });
