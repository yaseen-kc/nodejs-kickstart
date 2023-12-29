const fs = require('fs');

fs.readFile('sample.txt', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    const buffer = Buffer.from(data);

    console.log("Original Content: ");
    console.log(buffer.toString('utf-8'));

    const manipulatedBuffer = Buffer.from(buffer.toString('utf-8').toUpperCase());

    console.log("Manipulated Content: ");
    console.log(manipulatedBuffer.toString('utf-8'));

    fs.writeFile('output.txt', manipulatedBuffer, (writeErr) => {
        if (writeErr) {
            console.error('Error writing to file:', writeErr);
            return;
        }

        console.log('\nData has been written to output.txt');
    });
})















