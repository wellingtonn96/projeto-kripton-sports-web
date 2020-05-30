import { sign } from 'jsonwebtoken';

import authConfig from '@config/auth';

import AppError from '@shared/errors/AppError';

import { userRepository } from './createUserServices';

interface IRequest {
  email: string;
  password: string;
}

class CreateSessionService {
  public excute({ email, password }: IRequest) {
    const user = userRepository.findByEmail(email);

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
