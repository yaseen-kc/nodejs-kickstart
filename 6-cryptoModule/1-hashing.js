const { log } = require('console')
const crypto = require('crypto')

const data = "Hello World"
const hash = crypto.createHash('sha256').update(data).digest('hex')
console.log("Hashed Value:", hash);