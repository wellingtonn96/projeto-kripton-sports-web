import { hash, compare } from 'bcryptjs';

import User from '../model/user';

interface IUser {
  name: string;
  email: string;
  password: string;
}

class UserRepository {
  private users: User[];

  constructor() {
    this.users = [];
  }

  public listUsers(): User[] {
    return this.users;
  }

  public async create({ name, email, password }: IUser): Promise<User> {
    const userExistis = this.users.find(user => user.email === email);

    if (userExistis) {
      throw new Error('email alredy existis!');
    }

    const user = new User({ name, email, password });

    user.encryptedPassword = await hash(password, 8);

    this.users.push(user);

    return user;
  }

  public update(id: string, dataUser: User): User {
    try {
      const userIndex = this.users.findIndex(user => user.id == id);

      Object.assign(this.users[userIndex], dataUser);

      return this.users[userIndex];
    } catch (error) {
      throw new Error('Unable to find the inforemed user!');
    }
  }

  public delete(id: string) {
    const userIndex = this.users.findIndex(user => user.id == id);

    if (userIndex === -1) {
      throw new Error('Unble to find the informed user!');
    }

    this.users.splice(userIndex, 1);
  }

  public async validateUser(
    email: string,
    password: string
  ): Promise<User | undefined> {
    const user = this.users.find(users => users.email === email);

    if (!user) {
      return undefined;
    }

    const validPassword = await compare(password, user.encryptedPassword);

    if (!validPassword) {
      return undefined;
    }

    return user;
  }
}

export default UserRepository;
