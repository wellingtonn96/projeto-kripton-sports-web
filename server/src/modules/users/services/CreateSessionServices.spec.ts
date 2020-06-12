import 'reflect-metadata';

import CreateUserService from './createUserServices';
import CreateSessionService from './CreateSessionService';

import FakeUsersRepository from '../repositories/fakes/FakeUsersRepository';

import AppError from '@shared/errors/AppError';

describe('CreateSession', () => {
  it('sould  be able to authenticate user', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);
    const createSession = new CreateSessionService(fakeUsersRepository);

    const user = await createUser.execute({
      name: 'Jonh Doe',
      email: 'Jonhn@gmail.com',
      password: '123456',
    });

    const response = await createSession.execute({
      email: 'Jonhn@gmail.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('should be able to authenticated a user with invalid email', async () => {
    const fakeUsersRepository = new FakeUsersRepository();
    const createUser = new CreateUserService(fakeUsersRepository);
    const createSession = new CreateSessionService(fakeUsersRepository);

    await createUser.execute({
      name: 'Jonh Doe',
      email: 'jonh@gmail.com',
      password: '123456',
    });

    await expect(
      createSession.execute({
        email: 'invalid@gmail.com',
        password: '123456',
      })
    ).rejects.toBeInstanceOf(AppError);
  });
});
