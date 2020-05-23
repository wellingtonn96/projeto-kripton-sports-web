import { uuid } from 'uuidv4';

interface IUser {
  name: string;
  email: string;
  password: string;
}

class User {
  id: string;
  name: string;
  email: string;
  encryptedPassword: string;

  constructor({ name, email, password }: IUser) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.encryptedPassword = password;
  }
}

export default User;
