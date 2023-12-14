// Importing the 'fs' module for file system operations.
const fs = require("fs");

//! ----- Synchronous -----
// Writing a JSON file synchronously using 'writeFileSync'.
// The file path is "test.json", and the content is an array with a single object.
const content = [
  {
    type: "Node Application",
  },
];
fs.writeFileSync("test.json", JSON.stringify(content));

//! ----- Asynchronous -----
// Writing to a file asynchronously using 'writeFile'.
// The file path is "./fileSystem/file.txt", the content is a string, and the encoding is "utf8".
// A callback function is used to handle errors and log a success message.
const content1 = "Node Application";
fs.writeFile("./fileSystem/file.txt", content1, "utf8", (err) => {
  // Checking for errors during the asynchronous file write operation.
  if (err) {
    // Throwing an error if encountered during the asynchronous operation.
    throw err;
  }

  // Logging a success message when the file is created successfully.
  console.log("Successfully Created");
});
