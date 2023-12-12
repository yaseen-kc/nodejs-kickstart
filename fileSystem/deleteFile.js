// Importing the 'fs' module for file system operations.
const fs = require("fs");

// Removing a file using 'unlink'.
// The file path to be removed is "./fileSystem/file.txt".
// A callback function is used to handle errors and log a success message.
fs.unlink("./fileSystem/file.txt", (err) => {
  // Checking for errors during the file removal operation.
  if (err) {
    // Logging the error if encountered.
    console.log(err);
    return;
  }

  // Logging a success message when the file is removed successfully.
  console.log("File Removed");
});
