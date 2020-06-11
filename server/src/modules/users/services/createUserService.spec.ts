import 'reflect-metadata';

import CreateUserService from './createUserServices';

import AppError from '@shared/errors/AppError';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

describe('CreateUser', () => {
  it('should be able create a new user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'Jonh Doe',
      email: 'jonhndoe@ema.com',
      password: '123456',
      manager: false,
    });

    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a user with the same email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUserService = new CreateUserService(fakeUsersRepository);

    const user = await createUserService.execute({
      name: 'Jonh Doe',
      email: 'jonhdoe@email.com',
      password: '123456',
      manager: false,
    });

    expect(
      createUserService.execute({
        name: 'Jonh Tre',
        email: 'jonhdoe@email.com',
        password: '123456',
        manager: false,
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
