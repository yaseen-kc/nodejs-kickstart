const fs = require("fs");

console.log("First");

fs.readFile("./output.txt", "utf-8", (err, data) => {
    console.log("File Contents");
});

console.log("Last");