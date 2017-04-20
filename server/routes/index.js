import express from 'express'
import authRoute from './auth.route'
import usersRoute from './users.route'
import favsRoute from './favs.route'
import { authMiddleware, logMiddleware } from '../helpers'


let router = express.Router();

// Middleware for all this routers requests
router.use(logMiddleware);

router.use('/auth', authRoute);

router.use(authMiddleware);
router.use('/favs', favsRoute);
router.use('/users', usersRoute);

export default router;