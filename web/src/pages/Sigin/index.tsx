import React from 'react';
import { FiLogIn } from 'react-icons/fi';

import { Container, Content, Background } from './styles';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <form>
          <h1>Faça seu logon</h1>

          <input type="text" name="email" placeholder="E-mail" />
          <input type="password" name="password" placeholder="Senha" />

          <button type="submit">Entrar</button>

          <a href="/">Esqueci minha senha</a>
        </form>
        <a href="/">
          <FiLogIn size={20} />
          Criar conta
        </a>
      </Content>

      <Background />
    </Container>
  );
};

export default Signin;
