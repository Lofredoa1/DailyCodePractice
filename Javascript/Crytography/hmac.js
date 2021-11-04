const { createHmac } = require('crypto');

//create a special secret key
const key = 'secret-key';
const message = "You found me!";

// 
const hmac = createHmac('sha256', key).update(message).digest('hex');
console.log(hmac);

const key2 = "other-secret-key";
const hmac2 = createHmac('sha256', key2).update(message).digest('hex');
console.log(hmac2);

// if the same special key is used then the hashes will always be the same
// different keys produce different hashes with the same message