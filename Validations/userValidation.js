const Joi = require("joi");

// Validation schema for creating a user (POST)
const addUserValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .required()
        .messages({
            "string.empty": "Name is required",
            "string.min": "Name must be at least 3 characters long",
            "string.max": "Name must be less than or equal to 30 characters",
            "any.required": "Name is required"
        }),

    email: Joi.string()
        .email()
        .lowercase()
        .trim()
        .required()
        .messages({
            "string.empty": "Email is required",
            "string.email": "Please enter a valid email address",
            "any.required": "Email is required"
        }),

    age: Joi.number()
        .integer()
        .min(5)
        .max(77)
        .required()
        .messages({
            "number.base": "Age must be a number",
            "number.integer": "Age must be an integer",
            "number.min": "Age must be at least 5",
            "number.max": "Age must be less than or equal to 77",
            "any.required": "Age is required"
        }),

    password: Joi.string()
        .min(6)
        .max(20)
        .trim()
        .required()
        .messages({
            "string.empty": "Password is required",
            "string.min": "Password must be at least 6 characters long",
            "string.max": "Password must be less than or equal to 20 characters",
            "any.required": "Password is required"
        })
});

// Validation schema for updating a user (PUT/PATCH)
// All fields optional, but if present must follow same rules
const updateUserValidation = Joi.object({
    name: Joi.string()
        .min(3)
        .max(30)
        .trim()
        .messages({
            "string.min": "Name must be at least 3 characters long",
            "string.max": "Name must be less than or equal to 30 characters"
        }),

    email: Joi.string()
        .email()
        .lowercase()
        .trim()
        .messages({
            "string.email": "Please enter a valid email address"
        }),

    age: Joi.number()
        .integer()
        .min(5)
        .max(77)
        .messages({
            "number.base": "Age must be a number",
            "number.integer": "Age must be an integer",
            "number.min": "Age must be at least 5",
            "number.max": "Age must be less than or equal to 77"
        }),

    password: Joi.string()
        .min(6)
        .max(20)
        .trim()
        .messages({
            "string.min": "Password must be at least 6 characters long",
            "string.max": "Password must be less than or equal to 20 characters"
        })
}).min(1); // Require at least one field for PATCH

module.exports =  addUserValidation;
