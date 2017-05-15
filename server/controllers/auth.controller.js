import Users from '../models/users.model'
import jwt from 'jsonwebtoken'
import { hash } from '../helpers'
import CONF from '../config'

function login(req, res) {
    Users.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.status(401).error([{ message: 'Authentication failed.' }]);
        } else if (user) {
            // check if password matches

            if (hash.compare(req.body.password, user.password)) {
                let data = { data: user };
                let secret = CONF.api.secret;
                let settings = { expiresIn: '24h' };

                let token = jwt.sign(data, secret, settings);

                // return the information including token as JSON
                res.status(200).success(null, { token: token }, { message: 'Enjoy your token!' });

            } else {
                res.status(401).error([{ message: 'Authentication failed.' }]);
                // if user is found and password is right
                // create a token
            }
        }
    });
}

export default { login }