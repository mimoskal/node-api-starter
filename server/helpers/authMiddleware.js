import jwt from 'jsonwebtoken'
import CONF from '../config'
import { R } from '../helpers'

export default (req, res, next) => {
    let token = req.body.token || req.query.token || req.headers['x-access-token'];
    
    if (token) {
        // verifies secret and checks exp
        jwt.verify(token, CONF.api.secret, (err, decoded) => {
            if (err) {
                let error = {
                    field: 'token',
                    message: tokenMessages(err.name)
                };

                res.status(401).error([error]);
            } else {
                // if everything is good, save to request for use in other routes
                req.decoded = decoded;
                next();
            }
        });

    } else {
        let error = {
            field: 'token',
            message: tokenMessages(NoTokenError)
        };

        res.status(403).error([error]);
    }
}

const tokenMessages = (name) => {
    const messages = {
        TokenExpiredError: 'Auth token has expired.',
        DefaultError: 'Failed to authenticate token.',
        NoTokenError: 'No token provided.'
    };

    return messages[name] || messages.DefaultError;
};