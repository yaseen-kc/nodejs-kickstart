const assert = require("assert");

let x = 5;
let y = 7;

try {
    assert(x == y)
}
catch {
    console.log("Not Equal");
}