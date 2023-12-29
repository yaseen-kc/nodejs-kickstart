const dns = require('dns')
const ipAddress = '1.1.1.1'

dns.reverse(ipAddress, (err, hostname) => {
    if (err) throw err;
    console.log(`Hostname: ${hostname.join(', ')} `);
}) 