import { hash, compare } from 'bcryptjs';

import IEncryptedPassword from '../models/IEncryptedPassword';

class BCrypt implements IEncryptedPassword {
  public async generateHash(password: string): Promise<string> {
    const hashed = await hash(password, 8);

    return hashed;
  }

  public async compareHash(
    password: string,
    passwordHash: string
  ): Promise<boolean> {
    const passwordVaid = await compare(password, passwordHash);

    return passwordVaid;
  }
}

export default BCrypt;
