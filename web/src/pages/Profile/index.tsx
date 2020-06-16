import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';

import { Container, Content } from './styles';

import Input from '../../components/input';

const Profile: React.FC = () => {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <header>
        <div>
          <Link to="/dashboard">
            <FiArrowLeft size={20} />
          </Link>
          <img
            src="https://t4.ftcdn.net/jpg/00/65/77/27/240_F_65772719_A1UV5kLi5nCEWI0BNLLiFaBPEkUbv5Fv.jpg"
            alt="Avatar usuario"
          />
        </div>
      </header>
      <Content>
        <Form onSubmit={handleSubmit}>
          <h1>Meu Perfil</h1>

          <Input type="email" icon={FiUser} name="email" placeholder="E-mail" />
          <Input type="text" icon={FiUser} name="name" placeholder="Nome" />
          <Input
            type="password"
            icon={FiLock}
            name="old_password"
            placeholder="Senha Atual"
          />
          <Input
            type="password"
            icon={FiLock}
            name="password"
            placeholder="Nova Senha"
          />
          <Input
            type="password"
            icon={FiLock}
            name="comfirmation_password"
            placeholder="Confirmação de senha"
          />

          <button type="submit">Atualizar</button>
        </Form>
      </Content>
    </Container>
  );
};

export default Profile;
