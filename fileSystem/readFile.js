// Importing the 'fs' module for file system operations.
const fs = require("fs")

//! ----- Synchronous Way -----
// Reading file content synchronously using 'readFileSync'.
// The file path is "./fileSystem/file.txt" and the character encoding is "utf8".
const dataSync = fs.readFileSync("./fileSystem/file.txt", "utf8")

// Logging the data read from the file.
console.log("Synchronous Way:", dataSync)

//! ----- Asynchronous Way -----
// Reading file content asynchronously using 'readFile'.
// The file path is "./fileSystem/file.txt", character encoding is "utf8".
// Callback function is used to handle errors and process the file data.
fs.readFile("./fileSystem/file.txt", "utf8", (err, dataAsync) => {
  // Checking for errors during the asynchronous file read operation.
  if (err) {
    // Throwing an error if encountered during the asynchronous operation.
    throw err
  }

  // Logging the data read from the file asynchronously.
  console.log("Asynchronous Way:", dataAsync)
})
