const os = require('os');

console.log("CPU architecture: " + os.arch());

console.log("Free memory: " + os.freemem());

console.log("Total memory: " + os.totalmem());

console.log('List of network Interfaces: ' + os.networkInterfaces());

console.log('OS default directory for temp files : ' + os.tmpdir());