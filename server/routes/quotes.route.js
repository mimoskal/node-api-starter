import { Router } from 'express'
import Quotes from '../models/quotes.model'
import validate from 'express-validation'
import paramValidation from '../validation/quotes.validation'
import querymen from 'querymen'

let router = Router();

let querySchema = {
    featured: Boolean,
    sort: '-created_at',
    limit: 5
};

router.route('/')
    /** GET /api/quotes - Get all items */
    .get(querymen.middleware(querySchema), (req, res) => {
        let { query, select, cursor } = req.querymen;

        Quotes.paginate(query, select, cursor).then(data => {
            return res.status(200).success(data.items, { stats: data.stats });
        });
    })

    /** POST /api/quotes - Create new item */
    .post(validate(paramValidation), (req, res) => {
        let body = req.body;
        body.length = body.quote.length;

        Quotes.create(req.body)
            .then(item => {
                return res.status(201).success(item, { message: 'Object created successfully!' });
            }, error => {
                return res.send(error);
            });
    });

router.route('/:id')
    /** GET /api/quotes/:id - Get single item */
    .get((req, res) => {
        let { id } = req.params;

        Quotes.findById(id).then(item => {
            if (!item) {
                return res.status(404).error();
            }

            return res.status(200).success(item);
        }, error => {
            return res.send(error);
        });
    })

    /** PUT /api/quotes/:id - Update item */
    .put(validate(paramValidation), (req, res) => {
        let body = req.body;
        let { id } = req.params;

        body.length = body.quote.length;
        body.updated_at = new Date();

        Quotes.findOneAndUpdate({ _id: id }, body)
            .then(item => {
                if (!item) {
                    return res.status(404).error();
                }

                return Quotes.findById(id);

            }, error => {
                return res.send(error);
            })
            .then(item => {
                return res.status(200).success(item);
            });
    })

    /** DELETE /api/quotes/:id - Remove item */
    .delete((req, res) => {
        let { id } = req.params;
        Quotes.remove({ _id: id }, (error, result) => {
            if (error) {
                return res.send(error);
            }

            return res.json({ message: 'Object deleted successfully!' });
        });
    });

export default router;