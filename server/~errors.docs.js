/**
 * @apiDefine AuthError
 *
 * @apiError (401) {Number} code
 * @apiError (401) {Boolean} error
 * @apiError (401) {Array[Object]} errors
 * @apiError (401) {String} errors.message
 * @apiError (401) {String} errors.field
 * @apiError (401) {Number} time_ms
 *
 * @apiErrorExample 401
 *  {
 *      "code": 401,
 *      "error": true,
 *      "errors": [
 *          {
 *              "field": "token"
 *              "message": "Failed to authenticate token."
 *          }
 *      ],
 *      "time_ms": 10
 *  }
 */

/**
 * @apiDefine NotFoundError
 *
 * @apiError (404) {Number} code
 * @apiError (404) {Boolean} error
 * @apiError (404) {Array[Object]} errors
 * @apiError (404) {String} errors.message
 * @apiError (404) {String} errors.field
 * @apiError (404) {Number} time_ms
 *
 * @apiErrorExample 404
 *  {
 *      "code": 404,
 *      "error": true,
 *      "errors": [
 *          {
 *              "message": "Item not found."
 *          }
 *      ],
 *      "time_ms": 10
 *  }
 */