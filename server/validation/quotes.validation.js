import Joi from 'joi';

export default {
    /** POST /api/quotes */
    post: {
        body: {
            author: Joi.string().required(),
            quote: Joi.string().required()
        }
    },

    /** PUT /api/quotes/:id */
    put: {
        body: {
            author: Joi.string().required(),
            quote: Joi.string().required()
        },
        params: {
            quoteId: Joi.string().hex().required()
        }
    }
};