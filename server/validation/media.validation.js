import Joi from 'joi'

export default {
    /** POST /api/media */
    post: {
        body: {
            title: Joi.string()
        }
    },
};