import { Router } from 'express'
import mediaCtrl from '../controllers/media.controller'
import validate from 'express-validation'
import querymen from 'querymen'
import mediaValidation from '../validation/media.validation'

let router = Router();

let querySchema = {
    sort: '-updated_at',
    limit: 20
};

router.route('/')
    /**
     * @api {get} /media Get Media Library
     * @apiVersion 0.1.0
     * @apiName GetAllMedia
     * @apiGroup Media
     * @apiUse HeaderAuth
     *
     * @apiUse GetAllMediaSuccess
     * @apiUse StatsSuccess
     * @apiUse GetAllMediaSuccessExample
     *
     * @apiUse AuthError
     */
    .get(querymen.middleware(querySchema), mediaCtrl.getAll)

    /**
     * @api {post} /media Upload Media
     * @apiVersion 0.1.0
     * @apiName PostMedia
     * @apiGroup Media
     * @apiUse HeaderAuth
     *
     * @apiUse MediaParams
     *
     * @apiUse PostMediaSuccess
     * @apiUse PostMediaSuccessExample
     *
     * @apiUse AuthError
     */
    .post(validate(mediaValidation.post), mediaCtrl.upload);

router.route('/:mediaId')
    /**
     * @api {get} /media/:id Get Media
     * @apiVersion 0.1.0
     * @apiName GetMedia
     * @apiGroup Media
     * @apiUse HeaderAuth
     *
     * @apiUse GetMediaSuccess
     * @apiUse GetMediaSuccessExample
     *
     * @apiUse AuthError
     * @apiUse NotFoundError
     */
    .get(mediaCtrl.getOne)

    /**
     * @api {put} /media Update Media
     * @apiVersion 0.1.0
     * @apiName PutMedia
     * @apiGroup Media
     * @apiUse HeaderAuth
     *
     * @apiUse MediaParams
     *
     * @apiUse PostMediaSuccess
     * @apiUse PostMediaSuccessExample
     *
     * @apiUse AuthError
     */
    .put(validate(mediaValidation.post), mediaCtrl.update)

    /**
     * @api {delete} /media/:id Delete Media
     * @apiVersion 0.1.0
     * @apiName DeleteMedia
     * @apiGroup Media
     * @apiUse HeaderAuth
     *
     * @apiUse DeleteSuccess
     * @apiUse DeleteSuccessExample
     *
     * @apiUse AuthError
     * @apiUse NotFoundError
     */
    .delete(mediaCtrl.remove);

export default router;