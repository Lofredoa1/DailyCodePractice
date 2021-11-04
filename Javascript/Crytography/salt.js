const { scryptSync, randomBytes, timingSafeEqual } = require('crypto');

let users = [];

const signup = (email, password) => {
    // creates a random salt
    const salt = randomBytes(16).toString('hex');
    // hashes the password with the salt
    const hashedPassword = scryptSync(password, salt, 64).toString('hex');

    const user = { email, password: `${salt}:${hashedPassword}`}
    users.push(user);
    return users
}

const login = (email,password) => {
    // finds the user 
    const user = users.find(v => v.email === email);
    //retrieves salt and hashed password
    const [salt, key] = user.password.split(':');
    // hashes input password
    const hashedBuffer = scryptSync(password, salt, 64);
    const keyBuffer = Buffer.from(key, 'hex');
    // prevents timing attacks
    const match = timingSafeEqual(hashedBuffer, keyBuffer);

    if (match) {
        console.log('Login successful!')
    } else {
        console.log('Login Failed!')
    }
}

signup('anthony@gmail.com', 'orange123')


login('anthony@gmail.com', 'orange123')
