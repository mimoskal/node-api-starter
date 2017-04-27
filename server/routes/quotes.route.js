import { Router } from 'express'
import Quotes from '../models/quotes.model'
import validate from 'express-validation'
import paramValidation from '../validation/quotes.schema'

let router = Router();

/** GET **/
router.route('/')
    .get((req, res) => {
        Quotes.find((error, items) => {
            if (error) {
                return res.send(error);
            }

            return res.status(200).success(items);
        });
    });

/** POST **/
router.route('/')
    .post(validate(paramValidation.validateQuotes), (req, res) => {
        let body = req.body;
        body.length = body.quote.length;

        Quotes.create(req.body, (error, item) => {
            if (error) {
                return res.send(error);
            }

            return res.status(201).success(item, { message: 'Object created successfully!' });
        });
    });

/** DELETE **/
router.route('/:id')
    .delete((req, res) => {
        let id = req.params.id;
        Quotes.remove({ _id: id }, (error, result) => {
            if (error) {
                return res.send(error);
            }

            return res.json({ message: 'Object deleted successfully!' });
        });
    });

export default router;