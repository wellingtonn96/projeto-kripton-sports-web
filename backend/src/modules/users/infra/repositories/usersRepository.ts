import { hash, compare } from 'bcryptjs';

import User from '../entities/user';

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

  public findByEmail(email: string) {
    const userExistis = this.users.find(user => user.email === email);

    return userExistis;
  }

  public create({ name, email, password }: IUser): User {
    const user = new User({ name, email, password });

    user.encryptedPassword = password;

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
}

export default UserRepository;
