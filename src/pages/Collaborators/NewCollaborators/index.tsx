import React, { ChangeEvent, useCallback, useState } from 'react';

import { FiUser } from 'react-icons/fi';

import * as Yup from 'yup';

import { useHistory } from 'react-router-dom';
import { Container } from './style';

import Input from '../../../components/Input';
import InputSelect from '../../../components/InputSelect';
import FormHeader from '../../../components/FormHeader';
import ButtonCancel from '../../../components/ButtonCancel';
import ButtonSave from '../../../components/ButtonSave';
import ButtonGroup from '../../../components/ButtonGroup';

import { Errors, getValidationErrors } from '../../../utils/getValidationErros';
import AvatarUpload from '../../../components/AvatarUpload';
import { useToast } from '../../../hooks/Toast';
import { useAuth } from '../../../hooks/Auth';
import api from '../../../services/api';

const Collaborators: React.FC = () => {
  const history = useHistory();

  const { addToast } = useToast();
  const { token } = useAuth();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setComfirmPass] = useState('');
  const [typeUser, setTypeUser] = useState('');
  const [file, setFile] = useState<FileList>();
  const [errors, setErrors] = useState<Errors>({});

  const uploadImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files);
  }, []);

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
          confirmPass: Yup.string().required('Campo obrigatório'),
          typeUser: Yup.string().required('Campo obrigatório'),
        });

        const formData = new FormData();

        if (file) {
          formData.append('file', file[0] as Blob);
        }

        const data = {
          login,
          senhaEncrypt: password,
          email,
          nome: name,
          sobrenome: lastname,
          telefone: phone,
          idTipo: parseFloat(typeUser),
        };

        await schema.validate(
          {
            name,
            lastname,
            email,
            phone,
            login,
            password,
            typeUser,
            confirmPass,
          },
          {
            abortEarly: false,
          }
        );

        await api.post('collaborators', data, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        addToast({
          type: 'success',
          title: 'Sucesso!',
          description: 'Colaborador cadastrado com sucesso!',
        });

        setErrors({});

        history.push('/collaborators');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const getErrors = getValidationErrors(err);

          setErrors(getErrors);
        } else {
          addToast({
            type: 'error',
            title: 'Erro!',
            description: 'Ocorreu algum erro ao cadastrar colaborador!',
          });
        }
      }
    },
    [
      name,
      lastname,
      email,
      phone,
      login,
      password,
      typeUser,
      confirmPass,
      file,
      token,
      addToast,
    ]
  );

  return (
    <Container>
      <h1>Cadastrar colaborador</h1>
      <form onSubmit={handleSubmit}>
        <FormHeader title="Informações Pessoais" icon={FiUser} />

        <AvatarUpload name="avatar_id" file={file} onChange={uploadImage} />

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
          name="confirmPass"
          type="password"
          value={confirmPass}
          onChange={(e) => setComfirmPass(e.target.value)}
          error={errors.confirmPass}
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

        <ButtonGroup>
          <ButtonSave />
          <ButtonCancel />
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default Collaborators;
