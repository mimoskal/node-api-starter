import { Router } from 'express'
import Favs from '../models/favs.model'
import validate from 'express-validation'
import { R } from '../helpers'
import paramValidation from '../validation/favs.schema'

let router = Router();

/** GET **/
router.route('/')
    .get((req, res) => {
        Favs.find((error, items) => {
            if (error) {
                return res.send(error);
            }

            return res.json(items);
        });
    });

/** POST **/
router.route('/')
    .post(validate(paramValidation.validateFavs), (req, res) => {
        Favs.create(req.body, (error, item) => {
            if (error) {
                return res.send(error);
            }

            return res.status(201).json(R.success(201, item, 'Object created successfully!'));
        });
    });

/** DELETE **/
router.route('/:id')
    .delete((req, res) => {
        let id = req.params.id;
        Favs.remove({ _id: id }, (error, result) => {
            if (error) {
                return res.send(error);
            }

            return res.json({ message: 'Object deleted successfully!' });
        });
    });

export default router;