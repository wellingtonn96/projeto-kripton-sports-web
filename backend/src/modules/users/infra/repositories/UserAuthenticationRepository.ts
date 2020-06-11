import { sign } from 'jsonwebtoken';

import { userRepository } from '@modules/users/services/createUserServices';

class UserAuthenticationRepository {
  public async authenticate(email: string, password: string) {
    const user = await userRepository.validateUser(email, password);

    if (!user) {
      throw new Error('Incorrect e-mail/password, check your credentials.');
    }

    const token = sign({}, 'wellingtonsantosdesouza', {
      subject: user.id,
      expiresIn: '1d',
    });

    return { user, token };
  }
}

export default UserAuthenticationRepository;
