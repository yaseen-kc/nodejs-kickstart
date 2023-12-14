// Importing the 'path' module for working with file paths.
const path = require("path")

// Retrieving the base name of the file "file.json".
let file0 = path.basename('file.json')

// Retrieving the directory name of the file "pathModule/file.json".
let file1 = path.dirname('pathModule/file.json')

// Checking if the path "pathModule/file.json" is absolute.
let file2 = path.isAbsolute('pathModule/file.json')

// Checking if the path "C:file.json" is absolute.
let file3 = path.isAbsolute('C:file.json')

// Joining path segments to create an absolute path.
let dir = "pathModule"
let file4 = path.join('C:', '/Users/ymkcm/OneDrive/Documents/GitHub/nodejs-kickstart', dir, 'file.json')

// Parsing the path "pathModule/file.json" and returning an object with path components.
let file5 = path.parse('pathModule/file.json')

// Resolving the path "file.json" to an absolute path.
let file6 = path.resolve('file.json')

// Logging the results of each operation.
console.log(file0, file1, file2, file3, file4, file5, file6)
