import React, { useCallback, useRef } from 'react';
import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import { Link, useHistory } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import { FormHandles } from '@unform/core';
import { Container, Content, Background, AnimationForm } from './styles';
import Input from '../../components/input';

import KriptonLogo from '../../assets/kriptonLogo.png';
import getValidationErrors from '../../utils/getValidationError';
import { authenticateUser } from '../../utils/fakeApiUsers';

const Signin: React.FC = () => {
  interface SiginInFormData {
    email: string;
    password: string;
  }
  const formRef = useRef<FormHandles>(null);
  const history = useHistory();

  const handleSubmit = useCallback(async (data: SiginInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('Digite um e-mail valido')
          .required('E-mail Obrigatorio'),
        password: Yup.string().required('Senha é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await authenticateUser(data);

      history.push('/dashboard');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        formRef.current?.setErrors(errors);
      }
      // console.log();
    }
  }, []);
  return (
    <Container>
      <Content>
        <AnimationForm>
          <Form ref={formRef} onSubmit={handleSubmit}>
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
              onChange={() => {}}
            />

            <button type="submit">Entrar</button>

            <a href="/">Esqueci minha senha</a>
          </Form>
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
