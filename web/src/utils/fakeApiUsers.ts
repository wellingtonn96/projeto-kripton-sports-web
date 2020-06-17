import api from '../services/api';
import IUser from './IUser';
import IUserAuth from './IUserAuth';

export const createUser = async ({ name, password, email }: IUser) => {
  const { data } = await api.get('/users');

  const userExists = data.find((item: IUser) => item.email === email);

  if (userExists) {
    throw new Error('usuario ja existe!');
  }

  const user = {
    id: Math.random().toString(),
    name,
    password,
    email,
  };

  const results = await api.post('/users', user);

  return results;
};

export const authenticateUser = async ({ email, password }: IUserAuth) => {
  const { data } = await api.get('/users');

  const userExists = data.find(
    (item: IUser) => item.email === email && item.password === password
  );

  if (!userExists) {
    throw new Error('senha ou password incorretos');
  }

  return userExists;
};
