import { container } from 'tsyringe';

import IEncryptedPassword from './ProvidesEncryptedPassword/models/IEncryptedPassword';
import BCrypt from './ProvidesEncryptedPassword/implementations/BCrypt';

container.registerSingleton<IEncryptedPassword>('EncryptedPassword', BCrypt);
