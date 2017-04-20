import { Router } from 'express'
import Users from '../models/users.model'

let router = Router();

router.route('/')
    .get((req, res) => {
        Users.find({}, { password: false }, (error, items) => {
            if (error) {
                return res.send(error);
            }

            return res.json(items);
        });
    });


export default router;