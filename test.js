// Buffer Example
const inputText = 'Hello, buffer!';

// Creating a buffer from a string
const buffer = Buffer.from(inputText, 'utf-8');

// Displaying the buffer content
console.log('Buffer Content:', buffer);

// Converting the buffer back to a string
const outputText = buffer.toString('utf-8');

// Displaying the converted string
console.log('Converted String:', outputText);
