const fs = require("fs");

// Synchronous Way
const data = fs.readFileSync("./fileSystem/file.txt", "utf8");
console.log(data);

// Asynchronous Way
fs.readFile("./fileSystem/file.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
