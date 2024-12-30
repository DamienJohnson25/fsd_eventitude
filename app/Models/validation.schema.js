const Joi = require('joi');

// User schema for validation
const userSchema = Joi.object({
    first_name: Joi.string().required(),
    last_name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required().min(8).max(20).pattern(/(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])/)
}).options({ stripUnknown: true });

// Event schema for validation
const eventSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    location: Joi.string().required(),
    start: Joi.string().required(),
    close_registration: Joi.string().required(),
    max_attendees: Joi.number().integer().required()
}).options({ stripUnknown: true });

// Login schema for validation
const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().required()
}).unknown(false);

module.exports = { userSchema, eventSchema, loginSchema };
