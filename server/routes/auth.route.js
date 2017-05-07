import { Router } from 'express'
import validate from 'express-validation'
import authCtrl from '../controllers/auth.controller'
import authValidation from '../validation/auth.validation'

let router = Router();

router.route('/')
    /**
     * @api {post} /auth Login
     * @apiVersion 0.1.0
     * @apiName PostAuth
     * @apiGroup Auth
     *
     * @apiUse AuthParams
     *
     * @apiUse PostAuthSuccess
     *
     * @apiUse AuthValidationError
     * @apiUse AuthLoginError
     */
    .post(validate(authValidation.post), authCtrl.login);

export default router;