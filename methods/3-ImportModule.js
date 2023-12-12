// Destructuring the 'log' method from the 'console' module.
const { log } = require("console");

// Importing the 'os' module to access operating system-related information.
const os = require("os");

// Logging the operating system type.
log("Operating System Type:", os.type());

// Logging the operating system platform.
log("Operating System Platform:", os.platform());

// Logging the amount of free system memory (in bytes).
log("Free System Memory:", os.freemem());

// Logging the total amount of system memory (in bytes).
log("Total System Memory:", os.totalmem());

// Logging information about the CPU(s) on the system.
log("CPU Information:", os.cpus());

// Logging information about the network interfaces on the system.
log("Network Interfaces:", os.networkInterfaces());
