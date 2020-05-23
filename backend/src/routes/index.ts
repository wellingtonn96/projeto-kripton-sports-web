import { Router } from 'express';

import userRoutes from './users.routes';
import userAuthentication from './userAuthentication.routes';

import UserRepository from '../repositories/usersRepository';

const router = Router();

router.use('/sessions', userAuthentication);
router.use('/users', userRoutes);

export const userRepository = new UserRepository();
export default router;
