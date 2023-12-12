const fs = require("fs");

fs.unlink("./fileSystem/file.txt", (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log("File Removed");
});
