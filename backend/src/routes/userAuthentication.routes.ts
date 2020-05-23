import { Router } from 'express';

import UserAuthenticationRepository from '../repositories/UserAuthenticationRepository';

const routes = Router();

const userAuthenticationRepository = new UserAuthenticationRepository();

routes.post('/', async (request, response) => {
  try {
    const { email, password } = request.body;

    const { user, token } = await userAuthenticationRepository.authenticate(
      email,
      password
    );

    delete user.encryptedPassword;

    return response.json({ user, token });
  } catch (error) {
    return response.json({ err: error.message });
  }
});

export default routes;
