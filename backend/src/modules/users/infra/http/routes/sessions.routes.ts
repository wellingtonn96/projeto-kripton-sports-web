import { Router } from 'express';

import CreateSessionService from '@modules/users/services/CreateSessionService';

const sessionsRouter = Router();
const createSessionService = new CreateSessionService();

sessionsRouter.post('/', (request, response) => {
  const { email, password } = request.body;

  const { user, token } = createSessionService.excute({
    email,
    password,
  });

  return response.json({
    user,
    token,
  });
});

export default sessionsRouter;
