import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { FiUser } from 'react-icons/fi';

import * as Yup from 'yup';
import { Container } from './style';

import Input from '../../components/Input';
import InputSelect from '../../components/InputSelect';
import FormHeader from '../../components/FormHeader';
import ButtonCancel from '../../components/ButtonCancel';
import ButtonSave from '../../components/ButtonSave';
import ButtonGroup from '../../components/ButtonGroup';

import { Errors, getValidationErrors } from '../../utils/getValidationErros';
import AvatarUpload from '../../components/AvatarUpload';
import { useToast } from '../../hooks/Toast';

const Collaborators: React.FC = () => {
  const { addToast } = useToast();

  const [name, setName] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [comfirmPass, setComfirmPass] = useState('');
  const [typeUser, setTypeUser] = useState('');
  const [file, setFile] = useState<FileList>();
  const [errors, setErrors] = useState<Errors>({});

  const uploadImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files);
  }, []);

  useEffect(() => {
    addToast({
      type: 'success',
      title: 'Sucesso!',
      description: 'login efetuado com sucesso!',
    });
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
          comfirmPass: Yup.string().required('Campo obrigatório'),
          typeUser: Yup.string().required('Campo obrigatório'),
        });

        const formData = new FormData();

        if (file) {
          formData.append('file', file[0] as Blob);
        }

        const data = {
          name,
          lastname,
          email,
          phone,
          login,
          password,
          comfirmPass,
          typeUser,
          file: formData,
        };

        console.log(data);

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
    [name, lastname, email, phone, login, password, comfirmPass, typeUser, file]
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

        <ButtonGroup>
          <ButtonSave />
          <ButtonCancel />
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default Collaborators;
