/**
 * @apiDefine MediaParams
 *
 * @apiParam (Body) {File} file
 * @apiParam (Body) {String} [title]
 */

/**
 * @apiDefine PostMediaSuccess
 *
 * @apiSuccess (201) {Number} code
 * @apiSuccess (201) {Boolean} success
 * @apiSuccess (201) {Object} data
 * @apiSuccess (201) {String} data._id
 * @apiSuccess (201) {String} [data.title]
 * @apiSuccess (201) {String} data.url
 * @apiSuccess (201) {Date} data.created_at
 * @apiSuccess (201) {Date} data.updated_at
 * @apiSuccess (201) {String} message
 * @apiSuccess (201) {Number} time_ms
 */

/**
 * @apiDefine PostMediaSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 201,
 *          "success": true,
 *          "data": {
 *              "_id": "59104a7269205d1d64a38250",
 *              "title": "Placeholder image",
 *              "url": "https:\\example.com\\api\\uploads\\imgplaceholder--1494239858226.jpg",
 *              "updated_at": "2017-05-08T10:37:29.945Z",
 *              "created_at": "2017-05-08T10:37:29.945Z"
 *          },
 *          "message": "Object created successfully!",
 *          "time_ms": 8
 *      }
 */

/**
 * @apiDefine GetAllMediaSuccess
 *
 * @apiSuccess (200) {Number} code
 * @apiSuccess (200) {Boolean} success
 * @apiSuccess (200) {Array[Object]} data
 * @apiSuccess (200) {String} data._id
 * @apiSuccess (200) {String} [data.title]
 * @apiSuccess (200) {String} data.url
 * @apiSuccess (200) {Date} data.created_at
 * @apiSuccess (200) {Date} data.updated_at
 * @apiSuccess (200) {String} message
 * @apiSuccess (200) {Number} time_ms
 */

/**
 * @apiDefine GetAllMediaSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 200,
 *          "success": true,
 *          "data": [
 *              {
 *                  "_id": "59104a7269205d1d64a38250",
 *                  "title": "Placeholder image",
 *                  "url": "https:\\example.com\\api\\uploads\\imgplaceholder--1494239858226.jpg",
 *                  "updated_at": "2017-05-08T10:37:29.945Z",
 *                  "created_at": "2017-05-08T10:37:29.945Z"
 *              }
 *          ],
 *          "stats": {
 *              "pagination": {
 *                  "current_page": 1,
 *                  "last_page": 1,
 *                  "total_count": 7,
 *                  "per_page": 20
 *              }
 *          },
 *          "message": "Object created successfully!",
 *          "time_ms": 8
 *      }
 */

/**
 * @apiDefine GetMediaSuccess
 *
 * @apiSuccess (200) {Number} code
 * @apiSuccess (200) {Boolean} success
 * @apiSuccess (200) {Object} data
 * @apiSuccess (200) {String} data._id
 * @apiSuccess (200) {String} [data.title]
 * @apiSuccess (200) {String} data.url
 * @apiSuccess (200) {Date} data.created_at
 * @apiSuccess (200) {Date} data.updated_at
 * @apiSuccess (200) {String} message
 * @apiSuccess (200) {Number} time_ms
 */

/**
 * @apiDefine GetMediaSuccessExample
 *
 * @apiSuccessExample Success-Response:
 *      {
 *          "code": 200,
 *          "success": true,
 *          "data": {
 *              "_id": "59104a7269205d1d64a38250",
 *              "title": "Placeholder image",
 *              "url": "https:\\example.com\\api\\uploads\\imgplaceholder--1494239858226.jpg",
 *              "updated_at": "2017-05-08T10:37:29.945Z",
 *              "created_at": "2017-05-08T10:37:29.945Z"
 *          },
 *          "stats": {
 *              "pagination": {
 *                  "current_page": 1,
 *                  "last_page": 1,
 *                  "total_count": 7,
 *                  "per_page": 20
 *              }
 *          },
 *          "message": "Object created successfully!",
 *          "time_ms": 8
 *      }
 */