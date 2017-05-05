import Router from 'express'
import Quotes from '../models/quotes.model'
import validate from 'express-validation'
import quotesValidation from '../validation/quotes.validation'
import querymen from 'querymen'
import quotesCtrl from '../controllers/quotes.controller';

let router = Router();

let querySchema = {
    featured: Boolean,
    sort: '-created_at',
    limit: 5,
    fields: '-keywords'
};

router.route('/')
    /**
     * @api {get} /quotes List all quotes
     * @apiVersion 0.1.0
     * @apiName GetQuotes
     * @apiGroup Quotes
     * @apiHeader (Quotes) {String} x-access-token Authorization token.
     *
     * @apiSuccess {Number} code Response HTTP code.
     * @apiSuccess {Boolean} success
     * @apiSuccess {Object[]} data List of quotes (Array of Objects).
     * @apiSuccess {String} data._id Object id.
     * @apiSuccess {String} data.author Author name.
     * @apiSuccess {String} data.quote Quote body.
     * @apiSuccess {Number} data.length Quote length.
     * @apiSuccess {Date} data.created_at
     * @apiSuccess {Date} data.updated_at
     * @apiSuccess {Boolean} data.featured
     * @apiSuccess {String[]} data.tags
     * @apiSuccess {Object} stats
     * @apiSuccess {Object} stats.query
     * @apiSuccess {Object} stats.pagination
     * @apiSuccess {Number} stats.pagination.current_page
     * @apiSuccess {Number} stats.pagination.last_page
     * @apiSuccess {Number} stats.pagination.total_count
     * @apiSuccess {Number} stats.pagination.per_page
     * @apiSuccess {String} message
     * @apiSuccess {Number} time_ms
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
    .get(querymen.middleware(querySchema), quotesCtrl.getAll)

    /** POST /api/quotes - Create new item */
    .post(validate(quotesValidation.post), quotesCtrl.create);

router.route('/all')
    .delete(quotesCtrl.removeAll);

router.route('/:quoteId')
/**
 * @api {get} /quotes/:id Get single item
 * @apiVersion 0.1.0
 * @apiName GetQuote
 * @apiGroup Quotes
 * @apiHeader (Quotes) {String} x-access-token Authorization token.
 *
 * @apiSuccess {Number} code Response HTTP code.
 * @apiSuccess {Boolean} success
 * @apiSuccess {Object[]} data List of quotes (Array of Objects).
 * @apiSuccess {String} data._id Object id.
 * @apiSuccess {String} data.author Author name.
 * @apiSuccess {String} data.quote Quote body.
 * @apiSuccess {Number} data.length Quote length.
 * @apiSuccess {Date} data.created_at
 * @apiSuccess {Date} data.updated_at
 * @apiSuccess {Boolean} data.featured
 * @apiSuccess {String[]} data.tags
 * @apiSuccess {Object} stats
 * @apiSuccess {Object} stats.query
 * @apiSuccess {Object} stats.pagination
 * @apiSuccess {Number} stats.pagination.current_page
 * @apiSuccess {Number} stats.pagination.last_page
 * @apiSuccess {Number} stats.pagination.total_count
 * @apiSuccess {Number} stats.pagination.per_page
 * @apiSuccess {String} message
 * @apiSuccess {Number} time_ms
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
    .get(quotesCtrl.getOne)

    /** PUT /api/quotes/:id - Update item */
    .put(validate(quotesValidation.put), quotesCtrl.update)

    /** DELETE /api/quotes/:id - Remove item */
    .delete(quotesCtrl.remove);

/** Load user when API with userId route parameter is hit */
router.param('quoteId', quotesCtrl.load);

export default router;