const { createSign, createVerify } = require('crypto');
const { publicKey, privateKey } = require('./keypair');

const data = 'please sign here';

/// SIGN
const signer = createSign('rsa-sha256');
signer.update(data);
const signature = signer.sign(privateKey, 'hex');

console.log(signature);

/// VERIFY
const verifier = createVerify('rsa-sha256');
verifier.update(data);
// Check to see if data is verified
const isVerified = verifier.verify(publicKey, signature, 'hex');

console.log(isVerified);