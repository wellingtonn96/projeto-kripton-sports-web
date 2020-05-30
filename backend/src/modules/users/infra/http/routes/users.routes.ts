import { Router } from 'express';

import ensureAuthenticated from '../middlewares/ensureAuthenticated';

import CreateUserService, {
  userRepository,
} from '@modules/users/services/createUserServices';

const createUserService = new CreateUserService();

const routes = Router();

routes.get('/', ensureAuthenticated, (request, response) => {
  const user = userRepository.listUsers();
  return response.json(user);
});

routes.post('/', async (request, response) => {
  const { name, email, password } = request.body;

  const user = await createUserService.execute({
    name,
    email,
    password,
  });

  return response.json(user);
});

// routes.put('/:id/update', (request, response) => {
//   try {
//     const { id } = request.params;

//     const user = userRepository.update(id, request.body);

//     delete user.encryptedPassword;

//     return response.json({
//       message: 'User updated successfully',
//       user,
//     });
//   } catch (error) {
//     return response.json({ error: error.message });
//   }
// });

// routes.delete('/:id/delete', (request, response) => {
//   try {
//     const { id } = request.params;

//     userRepository.delete(id);

//     return response.json({
//       message: 'User deleted successfully',
//     });
//   } catch (error) {
//     return response.json({ error: error.message });
//   }
// });

export default routes;
