import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/entities/user';

export default interface IUserRepository {
  create(userData: ICreateUserDTO): User;
}
