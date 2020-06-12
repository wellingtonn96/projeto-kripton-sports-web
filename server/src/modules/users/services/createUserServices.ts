import { injectable, inject } from 'tsyringe';

import User from '@modules/users/infra/typeorm/entities/User';

import AppError from '@shared/errors/AppError';

import IUserRepository from '@modules/users/repositories/IUserRepository';
import IEncryptedPassword from '../providers/ProvidesEncryptedPassword/models/IEncryptedPassword';

interface IRequest {
  name: string;
  email: string;
  password: string;
  manager?: boolean;
}

@injectable()
class CreateUserService {
  constructor(
    @inject('UsersRepository')
    private userRepository: IUserRepository,

    @inject('EncryptedPassword')
    private encryptedPassword: IEncryptedPassword
  ) {}

  public async execute({
    name,
    email,
    password,
    manager,
  }: IRequest): Promise<User> {
    const userExistis = await this.userRepository.findByEmail(email);

    if (userExistis) {
      throw new AppError('Sorry, but that user already exist!', 401);
    }

    const passwordHashed = await this.encryptedPassword.generateHash(password);

    const user = await this.userRepository.create({
      name,
      email,
      password: passwordHashed,
      manager,
    });

    return user;
  }
}

export default CreateUserService;
