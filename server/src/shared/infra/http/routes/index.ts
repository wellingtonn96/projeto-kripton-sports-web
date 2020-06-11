import { Router } from 'express';

import userRoutes from '@modules/users/infra/http/routes/users.routes';

import sessionsRoutes from '@modules/users/infra/http/routes/sessions.routes';

const router = Router();

router.use('/sessions', sessionsRoutes);
router.use('/users', userRoutes);

export default router;
