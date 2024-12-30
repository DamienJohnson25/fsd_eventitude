const db = require('../config/database');

// Function to insert a new event
const insertEvent = (event, done) => {
    const values = [event.name, event.description, event.location, event.start, event.close_registration, event.max_attendees];
    db.run('INSERT INTO events (name, description, location, start, close_registration, max_attendees) VALUES (?, ?, ?, ?, ?, ?)', values, function(err) {
        if (err) {
            return done(err);
        }
        return done(null, this.lastID);
    });
};



module.exports = {
    insertEvent,
   
};


