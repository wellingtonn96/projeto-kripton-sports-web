import ICreateUserDTO from '@modules/users/dtos/ICreateUserDTO';
import User from '@modules/users/infra/typeorm/entities/User';

export default interface IUserRepository {
  create(userData: ICreateUserDTO): Promise<User>;
}
