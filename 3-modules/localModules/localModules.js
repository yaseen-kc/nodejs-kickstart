exports.add = function (x, y) {
    return x + y;
};

exports.sub = function (x, y) {
    return x - y;
};

exports.mul = function (x, y) {
    return x * y;
};

exports.div = function (x, y) {
    return x / y;
};

let mod = function (x, y) {
    return x % y;
}

module.exports.mod = mod;