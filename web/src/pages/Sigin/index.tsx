import React from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Container, Content, Background, AnimationForm } from './styles';

import Input from '../../components/input';

import KriptonLogo from '../../assets/kriptonLogo.png';

const Signin: React.FC = () => {
  return (
    <Container>
      <Content>
        <AnimationForm>
          <form>
            <h1>Faça seu logon</h1>

            <Input
              type="text"
              name="email"
              icon={FiUser}
              placeholder="E-mail"
            />
            <Input
              type="password"
              name="password"
              icon={FiLock}
              placeholder="Senha"
            />

            <button type="submit">Entrar</button>

            <a href="/">Esqueci minha senha</a>
          </form>
          <Link to="/sigin-up">
            <FiLogIn size={20} />
            Criar conta
          </Link>
        </AnimationForm>
      </Content>

      <Background>
        <img src={KriptonLogo} alt="dfsd" />
      </Background>
    </Container>
  );
};

export default Signin;
