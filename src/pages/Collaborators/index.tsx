import React, { useCallback, useState } from 'react';

import { FiUser } from 'react-icons/fi';

import * as Yup from 'yup';
import { Container } from './style';

import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';
import InputTextArea from '../../components/InputTextArea';
import FormHeader from '../../components/FormHeader';
import ButtonCancel from '../../components/ButtonCancel';
import ButtonSave from '../../components/ButtonSave';
import ButtonGroup from '../../components/ButtonGroup';

import { Errors, getValidationErrors } from '../../utils/getValidationErros';
import AvatarUpload from '../../components/AvatarUpload';

const Collaborators: React.FC = () => {
  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPass, setComfirmPass] = useState('');
  const [typeUser, setTypeUser] = useState('');
  const [description, setDescription] = useState('');
  const [errors, setErrors] = useState<Errors>({});

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        const schema = Yup.object().shape({
          name: Yup.string().required('Campo obrigatório'),
          lastname: Yup.string().required('Campo obrigatório'),
          email: Yup.string()
            .required('Campo obrigatório')
            .email('Campo do tipo email'),
          phone: Yup.string().required('Campo obrigatório'),
          login: Yup.string().required('Campo obrigatório'),
          password: Yup.string().required('Campo obrigatório'),
          comfirmPass: Yup.string().required('Campo obrigatório'),
          typeUser: Yup.string().required('Campo obrigatório'),
        });

        const data = {
          name,
          lastname,
          email,
          phone,
          login,
          password,
          comfirmPass,
          typeUser,
        };

        await schema.validate(data, {
          abortEarly: false,
        });

        setErrors({});
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const getErrors = getValidationErrors(err);

          setErrors(getErrors);
        }
      }
    },
    [name, lastname, email, phone, login, password, comfirmPass, typeUser]
  );

  return (
    <Container>
      <h1>Cadastrar colaborador</h1>
      <form onSubmit={handleSubmit}>
        <FormHeader title="Informações Pessoais" icon={FiUser} />

        <AvatarUpload label="Imagem de perfil" name="avatar_id" />

        <Input
          name="name"
          label="Nome"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <Input
          label="Sobrenome"
          name="lastname"
          type="text"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
          error={errors.lastname}
        />

        <Input
          name="name"
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={errors.email}
        />

        <Input
          label="Telefone"
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />

        <FormHeader title="Perfil de usuário" icon={FiUser} />

        <Input
          label="Login"
          name="login"
          type="text"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
          error={errors.login}
        />

        <Input
          label="Senha"
          name="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={errors.password}
        />

        <Input
          label="Comfirmar senha"
          name="comfirmPass"
          type="password"
          value={comfirmPass}
          onChange={(e) => setComfirmPass(e.target.value)}
          error={errors.comfirmPass}
        />

        <InputSelect
          label="Tipo usuario"
          name="userType"
          value={typeUser}
          onChange={(e) => setTypeUser(e.target.value)}
          error={errors.typeUser}
        >
          <option value="">Selecione o tipo de colaborador</option>
          <option value="1">GERENTE</option>
          <option value="2">VENDEDOR</option>
        </InputSelect>

        <InputTextArea
          label="Telefone"
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          error={errors.phone}
        />

        <ButtonGroup>
          <ButtonSave />
          <ButtonCancel />
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default Collaborators;
