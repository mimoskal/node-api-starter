/**
 * @apiDefine AuthParams
 *
 * @apiParam {String} email
 * @apiParam {String} password
 *
 * @apiParamExample Request-Example:
 *      {
 *          "email": "example@example.com",
 *          "password": "password"
 *      }
 */

/**
 * @apiDefine PostAuthSuccess
 *
 * @apiSuccess (200) {Number} code Response HTTP code.
 * @apiSuccess (200) {Boolean} success
 * @apiSuccess (200) {String} token
 * @apiSuccess (200) {String} message
 * @apiSuccess (200) {Number} time_ms
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 200,
 *          "success": true,
 *          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7Il9pZCI6IjU4ZWJkOTgzNzU0NDQxNDNmZjliNGY5ZCIsImVtYWlsIjoidGVzdEBleGFtcGxlLmNvbSIsImZpcnN0X25hbWUiOiJLb3ppb8WCZWsiLCJsYXN0X25hbWUiOiJNYXRvxYJlayIsInBhc3N3b3JkIjoicGFjYW5vdzEyMyIsImF2YXRhciI6Imh0dHBzOi8vYXBpLmFkb3JhYmxlLmlvL2F2YXRhcnMvMTI1L2tvemlvbGVrIiwidXBkYXRlZF9hdCI6IjIwMTctMDQtMTJUMTE6NTQ6MjAuMjY5WiIsImNyZWF0ZWRfYXQiOiIyMDE3LTA0LTEyVDExOjU0OjIwLjI2OVoifSwiaWF0IjoxNDk0MTU5NjcxLCJleHAiOjE0OTQyNDYwNzF9.ywmzBBKmt_7v8xYV7sk2oUPsjgTAwCH06ZSEY00M3Hk",
 *          "message": "Enjoy your token!",
 *          "time_ms": 5
 *      }
 */

/**
 * @apiDefine AuthValidationError
 *
 * @apiError (400) {Number} code
 * @apiError (400) {Boolean} error
 * @apiError (400) {Array[Object]} errors
 * @apiError (400) {String} errors.message
 * @apiError (400) {String} errors.field
 * @apiError (400) {Number} time_ms
 *
 * @apiErrorExample 400
 *
 *      {
 *          "code": 400,
 *          "error": true,
 *          "errors": [
 *              {
 *                  "field": "email",
 *                  "message": "\"email\" is required"
 *              },
 *              {
 *                  "field": "password",
 *                  "message": "\"password\" is required"
 *              }
 *          ],
 *          "time_ms": 27
 *      }
 */

/**
 * @apiDefine AuthLoginError
 *
 * @apiError (401) {Number} code
 * @apiError (401) {Boolean} error
 * @apiError (401) {Array[Object]} errors
 * @apiError (401) {String} errors.message
 * @apiError (401) {String} errors.field
 * @apiError (401) {Number} time_ms
 *
 * @apiErrorExample 401
 *
 *      {
 *          "code": 401,
 *          "error": true,
 *          "errors": [
 *              {
 *                  "message": "Authentication failed."
 *              }
 *          ],
 *          "time_ms": 29
 *      }
 */