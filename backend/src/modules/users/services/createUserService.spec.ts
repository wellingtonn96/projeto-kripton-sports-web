// import fakeUsersRepositories from '../repositories/fakes/FakeUserRepository';

import CreateUserService from './createUserServices';

describe('CreateUser', () => {
  it('should be able to creat a new user', () => {
    const createUser = new CreateUserService();

    const user = createUser.execute({
      name: 'Jonh Doe',
      email: 'Jonhdoe@email.com',
      password: '123456',
    });

    expect(user).toHaveProperty('id');
  });
});
