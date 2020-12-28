import React, { useState } from 'react';

import LogoImg from '../../assets/logo.png';

import { Container, Content } from './style';

const SignIn: React.FC = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="kripton suplementos" />

        <form>
          <label htmlFor="login">
            Login
            <input
              type="text"
              placeholder="Digite seu login"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </label>

          <label htmlFor="inputPassword">
            Senha
            <input
              type="password"
              placeholder="Digite sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <button type="submit" value="submit">
            Entrar
          </button>
        </form>

        <a href="/">Esqueceu a senha?</a>
      </Content>
    </Container>
  );
};

export default SignIn;
