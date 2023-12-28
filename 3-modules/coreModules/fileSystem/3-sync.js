var fs = require("fs")
const { sample } = require("lodash")

var data = fs.readFileSync('sample.txt')

console.log("Synchronous read:" + data.toString());