import Router from 'express'
import validate from 'express-validation'
import quotesValidation from '../validation/quotes.validation'
import querymen from 'querymen'
import quotesCtrl from '../controllers/quotes.controller'

let router = Router();

let querySchema = {
    featured: Boolean,
    sort: '-created_at',
    limit: 5,
    fields: '-keywords'
};

router.route('/')
    /**
     * @api {get} /quotes List Quotes
     * @apiVersion 0.1.0
     * @apiName GetAllQuotes
     * @apiGroup Quotes
     * @apiUse HeaderAuth
     *
     * @apiUse GetAllQuotesSuccess
     * @apiUse StatsSuccess
     * @apiUse GetAllQuotesSuccessExample
     *
     * @apiUse AuthError
     * @apiUse NotFoundError
     */
    .get(querymen.middleware(querySchema), quotesCtrl.getAll)

    /**
     * @api {post} /quotes Create Quote
     * @apiVersion 0.1.0
     * @apiName PostQuote
     * @apiGroup Quotes
     * @apiUse HeaderAuth
     *
     * @apiUse QuoteParams
     *
     * @apiUse PostQuoteSuccess
     * @apiUse PostQuoteSuccessExample
     *
     * @apiUse AuthError
     */
    .post(validate(quotesValidation.post), quotesCtrl.create);

// TEMP Temporary route for removing all items.
router.route('/all')
    .delete(quotesCtrl.removeAll);

router.route('/:quoteId')
    /**
     * @api {get} /quotes/:id Get Quote
     * @apiVersion 0.1.0
     * @apiName GetSingleQuote
     * @apiGroup Quotes
     * @apiUse HeaderAuth
     *
     * @apiUse GetSingleQuoteSuccess
     * @apiUse GetSingleQuoteSuccessExample
     *
     * @apiUse AuthError
     * @apiUse NotFoundError
     */
    .get(quotesCtrl.getOne)

    /**
     * @api {put} /quotes/:id Update Quote
     * @apiVersion 0.1.0
     * @apiName PutSingleQuote
     * @apiGroup Quotes
     * @apiUse HeaderAuth
     *
     * @apiUse QuoteParams
     *
     * @apiUse GetSingleQuoteSuccess
     * @apiUse GetSingleQuoteSuccessExample
     *
     * @apiUse AuthError
     * @apiUse NotFoundError
     */
    .put(validate(quotesValidation.put), quotesCtrl.update)

    /**
     * @api {delete} /quotes/:id Delete Quote
     * @apiVersion 0.1.0
     * @apiName DeleteQuote
     * @apiGroup Quotes
     * @apiUse HeaderAuth
     *
     * @apiUse DeleteSuccess
     * @apiUse DeleteSuccessExample
     *
     * @apiUse AuthError
     * @apiUse NotFoundError
     *
     */
    .delete(quotesCtrl.remove);

export default router;