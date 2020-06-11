import { getRepository, Repository } from 'typeorm';

import User from '../entities/User';

import IUserRepository from '@modules/users/repositories/IUserRepository';

import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';

class UserRepository implements IUserRepository {
  private ormRepository: Repository<User>;

  constructor() {
    this.ormRepository = getRepository(User);
  }

  public async create({
    name,
    email,
    password,
    manager,
  }: ICreateUserDTO): Promise<User> {
    const user = this.ormRepository.create({
      name,
      email,
      password,
      manager,
    });

    await this.ormRepository.save(user);

    return user;
  }
}

export default UserRepository;
