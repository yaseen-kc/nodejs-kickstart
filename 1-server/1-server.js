let http = require("http")

http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' })

    res.end("Server Created")
})
    .listen(3000, () => console.log("http://127.0.0.1:3000/"))
