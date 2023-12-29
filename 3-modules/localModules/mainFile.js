const calculator = require("./localModules");

let x = 5, y = 69;

console.log("Addition: " + calculator.add(x, y));
console.log("Subtraction: " + calculator.sub(x, y));
console.log("Division: " + calculator.div(x, y));
console.log("Multiplication: " + calculator.mul(x, y));
console.log("Modulus: " + calculator.mod(x, y));

