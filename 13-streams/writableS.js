const fs = require('fs');

const writableStream = fs.createWriteStream('output.txt');

writableStream.write('Hello, ');
writableStream.write('world!');

writableStream.end();

writableStream.on('finish', () => {
    console.log('Data has been written to the file.');

});

writableStream.on('error', (err) => {
    console.error(`Error writing to stream: ${err.message}`);
});
