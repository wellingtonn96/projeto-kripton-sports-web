import { uuid } from 'uuidv4';

import User from '@modules/users/infra/typeorm/entities/User';
import IUserRepository from '../IUserRepository';
import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class FakeUsersRepository implements IUserRepository {
  private users: User[] = [];

  public async create(dataUser: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: uuid() }, dataUser);

    this.users.push(user);

    return user;
  }
}

export default FakeUsersRepository;
