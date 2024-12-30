const db = require('../config/database');

// Function to insert a new question
const insertQuestion = (question, done) => {
    const values = [question.title, question.content, question.user_id, question.event_id, question.date_created];
    db.run('INSERT INTO questions (title, content, user_id, event_id, date_created) VALUES (?, ?, ?, ?, ?)', values, function(err) {
        if (err) {
            return done(err);
        }
        return done(null, this.lastID);
    });
};

// Function to find a question by ID
const findQuestionById = (id, done) => {
    db.get('SELECT * FROM questions WHERE id = ?', [id], function(err, row) {
        if (err) {
            return done(err);
        }
        return done(null, row);
    });
};

// Function to update a question by ID
const updateQuestionById = (id, updatedQuestion, done) => {
    const values = [updatedQuestion.title, updatedQuestion.content, updatedQuestion.user_id, updatedQuestion.event_id, updatedQuestion.date_created, id];
    db.run('UPDATE questions SET title = ?, content = ?, user_id = ?, event_id = ?, date_created = ? WHERE id = ?', values, function(err) {
        if (err) {
            return done(err);
        }
        return done(null, this.changes);
    });
};

// Function to delete a question by ID
const deleteQuestionById = (id, done) => {
    db.run('DELETE FROM questions WHERE id = ?', [id], function(err) {
        if (err) {
            return done(err);
        }
        return done(null, this.changes);
    });
};

module.exports = {
    insertQuestion,
    findQuestionById,
    updateQuestionById,
    deleteQuestionById
};
