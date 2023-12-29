const { error } = require("console");
var fs = require("fs");
var buf = new Buffer.alloc(1024);

// openFile
// fs.open('sample.txt', 'r+', function (err, fd) {
//     if (err) {
//         console.error(err);
//     }
//     console.log("File Opened");
// })

// readFile
fs.open('sample.txt', 'r+', function (err, fd) {
    if (err) {
        console.error(err);
    }
    console.log("File Opened");

    fs.read(fd, buf, 0, buf.length, 0, function (err, bytes) {
        if (err) {
            console.error(err);
        }
        console.log(bytes + " bytes read");
    })
    // if (bytes > 0) {
    //     console.log(buf.slice(0, bytes).toString());
    // }
})
