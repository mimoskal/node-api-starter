import Joi from 'joi';

export default {
    /** POST /api/quotes */
    body: {
        author: Joi.string().required(),
        quote: Joi.string().required()
    }
};