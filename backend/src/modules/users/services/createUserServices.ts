import User from '../infra/entities/user';

import AppError from '@shared/errors/AppError';

import UsersRepository from '../infra/repositories/usersRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export const userRepository = new UsersRepository();

class CreateUserService {
  public execute({ name, email, password }: IRequest): User {
    const userExistis = userRepository.findByEmail(email);

    if (userExistis) {
      throw new AppError('email alredy existis!', 401);
    }

    const user = userRepository.create({
      name,
      email,
      password,
    });

    return user;
  }
}

export default CreateUserService;
