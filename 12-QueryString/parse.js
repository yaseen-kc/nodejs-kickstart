const queryString = require('querystring');
const string = 'name=John&age=25';
const parsedObject = queryString.parse(string);
console.log(parsedObject);


