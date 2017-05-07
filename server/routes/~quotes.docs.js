/**
 * @apiDefine QuoteParams
 *
 * @apiParam {String} author
 * @apiParam {String} quote
 * @apiParam {Array[String]} [tags]
 * @apiParam {Boolean} [featured]
 */

/**
 * @apiDefine GetAllQuotesSuccess
 *
 * @apiSuccess (200) {Number} code Response HTTP code.
 * @apiSuccess (200) {Boolean} success
 * @apiSuccess (200) {Array[Object]} data
 * @apiSuccess (200) {String} data._id Object id.
 * @apiSuccess (200) {String} data.author Author name.
 * @apiSuccess (200) {String} data.quote Quote body.
 * @apiSuccess (200) {Number} data.length Quote length.
 * @apiSuccess (200) {Date} data.created_at
 * @apiSuccess (200) {Date} data.updated_at
 * @apiSuccess (200) {Boolean} data.featured
 * @apiSuccess (200) {Array[String]} data.tags
 *
 */

/**
 * @apiDefine GetAllQuotesSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 200,
 *          "success": true,
 *          "data": [
 *              {
 *                  "_id": "590cd272b1f9731b6ce726c4",
 *                  "author": "Allen Saunders",
 *                  "quote": "Life is what happens to us while we are making other plans.",
 *                  "length": 59,
 *                  "updated_at": "2017-05-05T19:27:40.612Z",
 *                  "created_at": "2017-05-05T19:27:40.612Z",
 *                  "featured": false,
 *                  "tags": [
 *                      "life"
 *                  ]
 *              },
 *          ]
 *          "stats": {
 *              "pagination": {
 *                  "current_page": 1,
 *                  "last_page": 2,
 *                  "total_count": 7,
 *                  "per_page": 5
 *              }
 *          },
 *          "message": "OK",
 *          "time_ms": 8
 *      }
 */

/**
 * @apiDefine GetSingleQuoteSuccess
 *
 * @apiSuccess (200) {Number} code Response HTTP code.
 * @apiSuccess (200) {Boolean} success
 * @apiSuccess (200) {Object} data
 * @apiSuccess (200) {String} data._id Object id.
 * @apiSuccess (200) {String} data.author Author name.
 * @apiSuccess (200) {String} data.quote Quote body.
 * @apiSuccess (200) {Number} data.length Quote length.
 * @apiSuccess (200) {Date} data.created_at
 * @apiSuccess (200) {Date} data.updated_at
 * @apiSuccess (200) {Boolean} data.featured
 * @apiSuccess (200) {Array[String]} data.tags
 * @apiSuccess (200) {String} message
 * @apiSuccess (200) {Number} time_ms
 */

/**
 * @apiDefine GetSingleQuoteSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 200,
 *          "success": true,
 *          "data": {
 *              "_id": "590cd272b1f9731b6ce726c4",
 *              "author": "Allen Saunders",
 *              "quote": "Life is what happens to us while we are making other plans.",
 *              "length": 59,
 *              "updated_at": "2017-05-05T19:27:40.612Z",
 *              "created_at": "2017-05-05T19:27:40.612Z",
 *              "featured": false,
 *              "tags": [
 *                  "life"
 *              ]
 *          },
 *          "message": "OK",
 *          "time_ms": 8
 *      }
 */

/**
 * @apiDefine PostQuoteSuccess
 *
 * @apiSuccess (201) {Number} code Response HTTP code.
 * @apiSuccess (201) {Boolean} success
 * @apiSuccess (201) {Object} data List of quotes (Array of Objects).
 * @apiSuccess (201) {String} data._id Object id.
 * @apiSuccess (201) {String} data.author Author name.
 * @apiSuccess (201) {String} data.quote Quote body.
 * @apiSuccess (201) {Number} data.length Quote length.
 * @apiSuccess (201) {Date} data.created_at
 * @apiSuccess (201) {Date} data.updated_at
 * @apiSuccess (201) {Boolean} data.featured
 * @apiSuccess (201) {Array[String} data.tags
 * @apiSuccess (201) {String} message
 * @apiSuccess (201) {Number} time_ms
 */

/**
 * @apiDefine PostQuoteSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 201,
 *          "success": true,
 *          "data": {
 *              "_id": "590cd272b1f9731b6ce726c4",
 *              "author": "Allen Saunders",
 *              "quote": "Life is what happens to us while we are making other plans.",
 *              "length": 59,
 *              "updated_at": "2017-05-05T19:27:40.612Z",
 *              "created_at": "2017-05-05T19:27:40.612Z",
 *              "featured": false,
 *              "tags": [
 *                  "life"
 *              ]
 *          },
 *          "message": "OK",
 *          "time_ms": 8
 *      }
 */

/**
 * @apiDefine DeleteQuoteSuccess
 * @apiSuccess (200) {Number} code
 * @apiSuccess (200) {Boolean} success
 * @apiSuccess (200) {String} message
 * @apiSuccess (200) {Number} time_ms
 */

/**
 * @apiDefine DeleteQuoteSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 200,
 *          "success": true,
 *          "message": "Object deleted successfully!",
 *          "time_ms": 8
 *      }
 */