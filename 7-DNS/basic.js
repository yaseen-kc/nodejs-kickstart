const dns = require('dns');

const domain = 'www.example.com';

dns.lookup(domain, (err, address, family) => {
    if (err) throw err;
    console.log(`Address: ${address}, IP Version: IPv${family}`);
});