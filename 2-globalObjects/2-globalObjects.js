global.myGlobalVariable = "Hello"

console.log(myGlobalVariable)

console.log("World")

console.log(__dirname)
console.log(__filename)

console.log(process.env.NODE_ENV)
console.log(process.argv)

setTimeout(() => {
    console.log("Hello World")
}, 1000);


// setInterval(() => {
//     console.log("Hello")
// }, 1000)

const fs = require('fs')

const buffer = Buffer.from('Hello, buffer!', 'utf-8')
console.log(buffer.toString('utf-8'))