/**
 * @apiDefine StatsSuccess
 * @apiSuccess (200) {Object} stats
 * @apiSuccess (200) {Object} stats.query
 * @apiSuccess (200) {Object} stats.pagination
 * @apiSuccess (200) {Number} stats.pagination.current_page
 * @apiSuccess (200) {Number} stats.pagination.last_page
 * @apiSuccess (200) {Number} stats.pagination.total_count
 * @apiSuccess (200) {Number} stats.pagination.per_page
 * @apiSuccess (200) {String} message
 * @apiSuccess (200) {Number} time_ms
 */

/**
 * @apiDefine HeaderAuth
 *
 * @apiHeader {String} x-access-token Authorization token.
 */

/**
 * @apiDefine DeleteSuccess
 * @apiSuccess (200) {Number} code
 * @apiSuccess (200) {Boolean} success
 * @apiSuccess (200) {String} message
 * @apiSuccess (200) {Number} time_ms
 */

/**
 * @apiDefine DeleteSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 200,
 *          "success": true,
 *          "message": "Object deleted successfully!",
 *          "time_ms": 8
 *      }
 */