import express from 'express'
import authRoute from './auth.route'
import usersRoute from './users.route'
import favsRoute from './favs.route'
import quotesRoute from './quotes.route'
import { authMiddleware } from '../helpers'


let router = express.Router();

router.use('/auth', authRoute);

router.use(authMiddleware);
router.use('/favs', favsRoute);
router.use('/users', usersRoute);
router.use('/quotes', quotesRoute);

export default router;