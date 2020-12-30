import React, { useState } from 'react';

import { FiLock, FiUser } from 'react-icons/fi';
import Input from './Input';

import LogoImg from '../../assets/logo.png';

import { Container, Content } from './style';

const SignIn: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data = {
      login,
      password,
    };

    console.log(data);
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
