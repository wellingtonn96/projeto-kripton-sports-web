import React from 'react';

import { FiLock, FiUser } from 'react-icons/fi';
import Input from '../../components/Input';

import LogoImg from '../../assets/logo.png';

import { Container, Content } from './style';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="kripton suplementos" />

        <form>
          <div>
            Login
            <Input name="login" icon={FiUser} />
          </div>

          <div>
            Senha
            <Input name="password" icon={FiLock} />
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
