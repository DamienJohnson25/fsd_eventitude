const users = require('../Models/user.server.models.js');
const { loginSchema, createAccountSchema } = require('../Models/validation.schema.js');
const express = require('express');

// Function to handle creating an account
const create_account = (req, res) => {
    // Validate the request body against the schema
    const { error } = createAccountSchema.validate(req.body);
    if (error) return res.status(400).send({ error_message: error.details[0].message });

    const { first_name, last_name, email, password } = req.body;

    // Check if email already exists
    users.findUserByEmail(email, (err, user) => {
        if (err) return res.status(500).send({ error_message: "Server error" });
        if (user) return res.status(400).send({ error_message: "Duplicate email" });

        // Create new user
        users.createUser({ first_name, last_name, email, password }, (err, userId) => {
            if (err) return res.status(500).send({ error_message: "Error creating user" });
            return res.status(201).send({ user_id: userId });
        });
    });
};

// Function to handle user login
const login = (req, res) => {
    // Validate the request body against the schema
    const { error } = loginSchema.validate(req.body);
    if (error) return res.status(400).send({ error_message: error.details[0].message });

    const { email, password } = req.body;

    // Find user by email
    users.findUserByEmail(email, (err, user) => {
        if (err) return res.status(500).send({ error_message: "Server error" });
        if (!user) return res.status(400).send({ error_message: "Incorrect email" });

        // Verify password
        const isPasswordValid = users.verifyPassword(password, user.password, user.salt);
        if (!isPasswordValid) return res.status(400).send({ error_message: "Incorrect password" });

        // Get the session token
        users.getSessionToken(user.id, (err, token) => {
            if (err) return res.status(500).send({ error_message: "Error retrieving session token" });
            if (token) {
                // Return existing token if user is already logged in
                return res.status(200).send({ user_id: user.id, session_token: token });
            } else {
                // Generate and set a new session token if not logged in
                const newToken = users.generateToken();
                users.setSessionToken(user.id, newToken, (err) => {
                    if (err) return res.status(500).send({ error_message: "Error setting session token" });
                    return res.status(200).send({ user_id: user.id, session_token: newToken });
                });
            }
        });
    });
};

// Function to handle user logout
const logout = (req, res) => {
    if (!req.session || !req.session.userId) {
        return res.status(401).send({ error_message: "User not logged in" });
    }

    req.session.destroy(err => {
        if (err) return res.status(500).send({ error_message: "Server error" });
        return res.status(200).send({ message: "Successfully logged out" });
    });
};

module.exports = {
    create_account: create_account,
    login: login,
    logout: logout
};
