// Importing the 'http' and 'fs' modules for creating an HTTP server and reading files.
const http = require("http")
const fs = require("fs")

// Creating an HTTP server that streams the contents of "test.json" to the response.
const server = http.createServer(function (req, res) {
    // Creating a readable stream from the file "test.json".
    const stream = fs.createReadStream("test.json")

    // Piping the stream to the response object, sending the file content to the client.
    stream.pipe(res)
})

// Listening on port 3000 for incoming HTTP requests.
server.listen(3000, () => {
    console.log("Application Started")
})
