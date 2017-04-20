import Joi from 'joi';

export default {
    // POST /api/users
    validateFavs: {
        body: {
            email: Joi.string().email().required(),
            user: Joi.string().required()
        }
    }
};