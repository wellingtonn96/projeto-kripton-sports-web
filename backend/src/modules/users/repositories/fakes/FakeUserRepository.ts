import User from '../../infra/entities/user';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class FakeUserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public async create(userData: ICreateUserDTO) {
    const user = new User(userData);

    this.users.push(user);

    return user;
  }
}

export default FakeUserRepository;
