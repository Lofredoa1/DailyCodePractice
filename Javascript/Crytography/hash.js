const { createHash } = require('crypto');

// Creates a string hash
const hash = (input) => {
    return createHash('sha256').update(input).digest('base64');
}

// Stores the original password in a hash
let password = 'orange82!';
const hash1 = hash(password);
console.log(hash1)

// User logs in with password and creates hash
password = 'orange81!'
const hash2 = hash(password)

// checks to see if hashes match
const match = hash1 === hash2;

console.log(match ? 'Passwords match' : 'Password does not match');