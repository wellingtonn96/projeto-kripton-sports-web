import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';

import IUserRepository from '@modules/users/repositories/IUserRepository';

interface IRequest {
  name: string;
  email: string;
  password: string;
  manager: boolean;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute({
    name,
    email,
    password,
    manager,
  }: IRequest): Promise<User> {
    const user = await this.userRepository.create({
      name,
      email,
      password,
      manager,
    });

    return user;
  }
}

export default CreateUserService;
