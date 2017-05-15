import Joi from 'joi';

export default {
    /** POST /api/quotes */
    post: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        }
    },

    /** PUT /api/quotes/:id */
    put: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().min(6).required()
        },
        params: {
            userId: Joi.string().hex().required()
        }
    }
};