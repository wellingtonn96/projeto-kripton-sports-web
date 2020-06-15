import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogOut, FiUser, FiLock } from 'react-icons/fi';

import { Container, Content, Background, AnimationForm } from './styles';

import KriptonLogo from '../../assets/kriptonLogo.png';

import Input from '../../components/input';

const SignUp: React.FC = () => {
  return (
    <Container>
      <Background>
        <img src={KriptonLogo} alt="kripton sports" />
      </Background>
      <Content>
        <AnimationForm>
          <form>
            <h1>Criar cadastro</h1>

            <Input type="text" icon={FiUser} name="Nome" placeholder="Nome" />
            <Input
              type="email"
              icon={FiUser}
              name="email"
              placeholder="E-mail"
            />
            <Input
              type="password"
              icon={FiLock}
              name="password"
              placeholder="Senha"
            />

            <button type="submit">Cadastrar</button>
          </form>
          <Link to="/">
            <FiLogOut size={20} />
            Voltar para logon
          </Link>
        </AnimationForm>
      </Content>
    </Container>
  );
};

export default SignUp;
