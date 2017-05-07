import Joi from 'joi'

export default {
    /** POST /api/auth */
    post: {
        body: {
            email: Joi.string().email().required(),
            password: Joi.string().required()
        }
    },
};