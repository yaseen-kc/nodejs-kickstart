const path = require("path");

file0 = path.basename('file.json');
file1 = path.dirname('pathModule/file.json')
file2 = path.isAbsolute('pathModule/file.json')
file3 = path.isAbsolute('C:/Users/ymkcm/OneDrive/Documents/GitHub/nodejs-kickstart/pathModule/file.json')


console.log(file0);
console.log(file1);
console.log(file2);
console.log(file3);
