import React, { useCallback, useRef } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogOut, FiUser, FiLock } from 'react-icons/fi';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import { Container, Content, Background, AnimationForm } from './styles';

import KriptonLogo from '../../assets/kriptonLogo.png';

import Input from '../../components/input';

import getValidationErrors from '../../utils/getValidationError';

import { createUser } from '../../utils/fakeApiUsers';

const SignUp: React.FC = () => {
  const history = useHistory();
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async data => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        name: Yup.string().required('nome obrigatório!'),
        email: Yup.string()
          .email('Digite um e-mail valido')
          .required('E-mail Obrigatorio'),
        password: Yup.string().required('Senha é obrigatória'),
      });

      await schema.validate(data, { abortEarly: false });

      await createUser(data);

      history.push('/');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);

        formRef.current?.setErrors(errors);
      }
    }
  }, []);

  return (
    <Container>
      <Background>
        <img src={KriptonLogo} alt="kripton sports" />
      </Background>
      <Content>
        <AnimationForm>
          <Form onSubmit={handleSubmit} ref={formRef}>
            <h1>Criar cadastro</h1>

            <Input type="text" icon={FiUser} name="name" placeholder="Nome" />
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
          </Form>
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
