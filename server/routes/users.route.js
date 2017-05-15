import { Router } from 'express'
import querymen from 'querymen'
import validate from 'express-validation'
import usersValidation from '../validation/users.validation'
import usersCtrl from '../controllers/users.controller'

let router = Router();

let querySchema = {
    sort: '-updatedAt',
    limit: 20,
    fields: '-password'
};

router.route('/')
    .get(querymen.middleware(querySchema), usersCtrl.getAll)

    .post(validate(usersValidation.post), usersCtrl.create);

router.route('/:userId')
    .get(usersCtrl.getOne)
    .put(validate(usersValidation.put), usersCtrl.update)
    .delete(usersCtrl.remove);

export default router;