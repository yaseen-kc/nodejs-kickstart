// ! Synchronous
const fs = require("fs");
const content = [
  {
    type: "Node Application",
  },
];
fs.writeFileSync("test.json", JSON.stringify(content));

// ! Asynchronous
const content1 = "Node Application";

fs.writeFile("./fileSystem/file.txt", content1, w, (err, dataAsync) => {
  if (err) {
    throw err;
  }
  console.log("Successfully Created");
});
