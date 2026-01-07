const Joi = require("joi");

const validate = (schema) => {
    
    return (req, res, next) => {
        const { error, value } = schema.validate(req.body, {
            abortEarly: false,
            allowUnknown: true
        });

        if (error) {
            const errors = error.details.map((detail) => ({
                field: detail.path("."),
                message: detail.message
            }));

            return res.status(400).json({
                success: false,
                errors
            });
        }

        req.body = value; // sanitized data
        next();
    };
};

module.exports = validate;
