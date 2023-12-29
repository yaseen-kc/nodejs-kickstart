const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'aSecretKey';
const cipher = crypto.createCipheriv(algorithm, key);
let encrypted = cipher.update('SensitiveData', 'utf-8', 'hex');
encrypted += cipher.final('hex');
console.log('Encrypted:', encrypted);

const decipher = crypto.createDecipheriv(algorithm, key);
let decrypted = decipher.update(encrypted, 'hex', 'utf-8');
decrypted += decipher.final('utf-8');
console.log('Decrypted:', decrypted);
