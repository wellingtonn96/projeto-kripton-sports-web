import React, { useState } from 'react';

import { FiUser } from 'react-icons/fi';

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
          <div>
            <span>Nome</span>
          </div>
          <input
            name="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <div>
            <span>Sobrenome</span>
          </div>
          <input
            name="lastname"
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <div>
            <span>Email</span>
          </div>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <div>
            <span>Telefone</span>
          </div>
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
          <div>
            <span>Login</span>
          </div>
          <input
            name="login"
            type="text"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <div>
            <span>Senha</span>
          </div>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <div>
            <span>Comfirmar senha</span>
          </div>
          <input
            name="comfirmPass"
            type="password"
            value={comfirmPass}
            onChange={(e) => setComfirmPass(e.target.value)}
          />
        </FormGroup>

        <FormGroup>
          <div>
            <span>Tipo usuario:</span>
          </div>
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
  );
};

export default Collaborators;
