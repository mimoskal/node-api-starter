import Joi from 'joi';

export default {
    // POST /api/users
    validateQuotes: {
        body: {
            author: Joi.string().required(),
            quote: Joi.string().required()
        }
    }
};