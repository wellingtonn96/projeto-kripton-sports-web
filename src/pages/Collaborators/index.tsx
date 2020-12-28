import React, { useState } from 'react';

import { FiUser } from 'react-icons/fi';

import DefaultLayout from '../_layouts/default';

import {
  FormContainer,
  FormHeader,
  FormGroup,
  ButtonGroup,
  ButtonCancel,
  ButtonSave,
} from './style';

const Collaborators: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPass, setComfirmPass] = useState('');
  const [typeUser, setTypeUser] = useState('');

  return (
    <DefaultLayout>
      <FormContainer>
        <h1>Cadastrar colaborador</h1>
        <form>
          <FormHeader>
            <i>
              <FiUser />
            </i>
            <h4>Informações Pessoais</h4>
          </FormHeader>
          <FormGroup>
            <span>Nome</span>
            <input
              name="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <span>Sobrenome</span>
            <input
              name="lastname"
              type="text"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <span>Email</span>
            <input
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <span>Telefone</span>
            <input
              name="phone"
              type="text"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </FormGroup>
          <FormHeader>
            <i>
              <FiUser />
            </i>
            <h4>Perfil de usuário</h4>
          </FormHeader>
          <FormGroup>
            <span>Login</span>
            <input
              name="login"
              type="text"
              value={login}
              onChange={(e) => setLogin(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <span>Senha</span>
            <input
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <span>Comfirmar senha</span>
            <input
              name="comfirmPass"
              type="password"
              value={comfirmPass}
              onChange={(e) => setComfirmPass(e.target.value)}
            />
          </FormGroup>

          <FormGroup>
            <span>Tipo usuario:</span>
            <select
              name="userType"
              value={typeUser}
              onChange={(e) => setTypeUser(e.target.value)}
            >
              <option value="1">GERENTE</option>
              <option value="2">VENDEDOR</option>
            </select>
          </FormGroup>

          <ButtonGroup>
            <ButtonCancel type="button">cancelar</ButtonCancel>
            <ButtonSave type="submit">salvar</ButtonSave>
          </ButtonGroup>
        </form>
      </FormContainer>
    </DefaultLayout>
  );
};

export default Collaborators;
