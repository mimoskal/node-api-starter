import express from 'express'
import authRoute from './auth.route'
import usersRoute from './users.route'
import quotesRoute from './quotes.route'
import mediaRoute from './media.route'
import { authMiddleware } from '../helpers'


let router = express.Router();

router.use('/auth', authRoute);

router.use(authMiddleware);
router.use('/users', usersRoute);
router.use('/quotes', quotesRoute);
router.use('/media', mediaRoute);

export default router;