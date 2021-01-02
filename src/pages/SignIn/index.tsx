import React, { useState } from 'react';

import { FiLock, FiUser } from 'react-icons/fi';
import * as Yup from 'yup';
import Input from './Input';

import LogoImg from '../../assets/logo.png';

import { Container, Content } from './style';

interface Errors {
  [key: string]: string;
}

const SignIn: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const schema = Yup.object().shape({
        login: Yup.string()
          .required('Campo obrigatório')
          .min(4, 'minino 4 digitos'),
        password: Yup.string()
          .required('Campo obrigatório')
          .min(8, 'minimo 8 digitos'),
      });

      const data = {
        login,
        password,
      };

      await schema.validate(data, {
        abortEarly: false,
      });

      console.log(data);

      setErrors({});
    } catch (err) {
      const validationErrors: Errors = {};

      err.inner.forEach((error: Errors) => {
        validationErrors[error.path] = error.message;
      });

      setErrors(validationErrors);
    }
  };

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="kripton suplementos" />

        <form onSubmit={handleSubmit}>
          <div>
            Login
            <Input
              name="login"
              type="text"
              icon={FiUser}
              placeholder="Digite o login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
              error={errors.login}
            />
          </div>

          <div>
            Senha
            <Input
              name="password"
              type="password"
              icon={FiLock}
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />
          </div>

          <button type="submit" value="submit">
            Entrar
          </button>
        </form>

        <p>
          Esqueceu a senha?
          <a href="/">Redefinir senha</a>
        </p>
      </Content>
    </Container>
  );
};

export default SignIn;
