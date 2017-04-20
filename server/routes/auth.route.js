import { Router } from 'express'
import Users from '../models/users.model'
import jwt from 'jsonwebtoken';
import CONF from '../config'

let router = Router();

router.post('/', (req, res) => {
    Users.findOne({ email: req.body.email }, (err, user) => {
        if (err) throw err;

        if (!user) {
            res.json({ success: false, message: 'Authentication failed. User not found.' });
        } else if (user) {
            // check if password matches
            if (user.password != req.body.password) {
                res.json({ success: false, message: 'Authentication failed. Wrong password.' });
            } else {
                // if user is found and password is right
                // create a token
                let token = jwt.sign( {
                    data: user
                }, CONF.api.secret, {
                    expiresIn: '24h'
                });

                // return the information including token as JSON

                res.status(200).test();
                //console.log(res.statusCode);
                res.status(200).json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token
                });
            }

        }
    });
});

export default router;