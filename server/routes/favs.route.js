import { Router } from 'express'
import Favs from '../models/favs.model'
import validate from 'express-validation'
import { R } from '../helpers'
import paramValidation from '../validation/favs.schema'

let router = Router();

/** GET **/
router.route('/')
/**
 * @api {get} /favs List all quotes
 * @apiVersion 0.1.0
 * @apiName NodeApiStarter
 * @apiGroup Favs
 * @apiHeader (Favs) {String} x-access-token Authorization token.
 *
 * @apiSuccess {Number} code Response HTTP code.
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} data List of quotes (Array of Objects).
 * @apiSuccess {String} data._id Object id.
 * @apiSuccess {String} data.author Author name.
 * @apiSuccess {String} data.quote Quote body.
 * @apiSuccess {Number} data.length Quote length.
 * @apiSuccess {Object} stats
 * @apiSuccess {Object} stats.query

 * @apiError UserNotFound The id of the User was not found.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
     *       "firstname": "John",
     *       "lastname": "Doe"
     *     }
 *

 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
     *       "error": "UserNotFound"
     *     }
 */
    .get((req, res) => {
        Favs.find((error, items) => {
            if (error) {
                return res.send(error);
            }

            return res.status(200).success(items);
        });
    });

/** POST **/
router.route('/')
    .post(validate(paramValidation.validateFavs), (req, res) => {
        Favs.create(req.body, (error, item) => {
            if (error) {
                return res.send(error);
            }

            return res.status(201).success(item, { message: 'Object created successfully!' });
        });
    });

/** DELETE **/
router.route('/:id')
    .delete((req, res) => {
        let { id } = req.params;
        Favs.remove({ _id: id }, (error, result) => {
            if (error) {
                return res.send(error);
            }

            return res.json({ message: 'Object deleted successfully!' });
        });
    })
    .get((req, res) => {
        let { id } = req.params;
        Favs.findOne({ _id: id }).then();
    })

export default router;