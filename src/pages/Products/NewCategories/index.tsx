import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';
import { Container } from './styles';
import Input from '../../../components/Input';
import FormHeader from '../../../components/FormHeader';
import ButtonGroup from '../../../components/ButtonGroup';
import ButtonSave from '../../../components/ButtonSave';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/Auth';
import { useToast } from '../../../hooks/Toast';

const NewCategories: React.FC = () => {
  const [name, setName] = useState('');
  const { authentication } = useAuth();
  const { addToast } = useToast();
  const history = useHistory();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      await api.post(
        'categories',
        {
          name,
        },
        authentication
      );

      addToast({
        type: 'success',
        title: 'Sucesso!',
        description: 'Categoria cadastrada com sucesso!',
      });

      history.push('/categorias');
    } catch (error) {
      addToast({
        type: 'error',
        title: 'Error',
        description: 'Falha ao cadastrar a categoria!',
      });
    }
  };

  return (
    <Container>
      <h1>Cadastrar categorias</h1>
      <form onSubmit={handleSubmit}>
        <FormHeader title="Categories de produtos" />
        <Input
          label="nome"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <ButtonGroup>
          <ButtonSave />
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default NewCategories;
