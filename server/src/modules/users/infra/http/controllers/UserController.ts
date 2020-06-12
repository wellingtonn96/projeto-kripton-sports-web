import { Request, Response } from 'express';

import { container } from 'tsyringe';
import { classToClass } from 'class-transformer';

import CreateUserService from '@modules/users/services/createUserServices';

class UserController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password, manager } = request.body;
    const createUser = container.resolve(CreateUserService);

    const user = await createUser.execute({
      name,
      email,
      password,
      manager,
    });

    return response.json(classToClass(user));
  }
}

export default UserController;
