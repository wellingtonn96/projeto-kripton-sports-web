import { sign } from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

import IUserRepository from '../repositories/IUserRepository';

interface IRequest {
  email: string;
  password: string;
}

@injectable()
class CreateSessionService {
  constructor(
    @inject('UserRepository')
    private userRepository: IUserRepository
  ) {}

  public async execute({ email, password }: IRequest) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError('User does not exists');
    }

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign({}, secret, {
      expiresIn: expiresIn,
      subject: user.id,
    });

    return { user, token };
  }
}

export default CreateSessionService;
