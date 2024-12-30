const db = require('../config/database');
const crypto = require('crypto');


// Function to generate a salt
const generateSalt = () => {
    return crypto.randomBytes(16).toString('hex');
};

// Function to hash a password with a given salt
const hashPassword = (password, salt) => {
    return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
};

// Function to insert a new user
const insertUser = (user, done) => {
    const salt = generateSalt();
    const hashedPassword = hashPassword(user.password, salt);
    const values = [user.first_name, user.last_name, user.email, hashedPassword, salt];
    db.run('INSERT INTO users (first_name, last_name, email, password, salt) VALUES (?, ?, ?, ?, ?)', values, function(err) {
        if (err) {
            return done(err);
        }
        return done(null, this.lastID);
    });
};



module.exports = {
    insertUser,
   
};
