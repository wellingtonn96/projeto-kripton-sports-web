import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/Auth';
import { Container, DetailHeader, DetailBody } from './style';

interface IResponse {
  idColaborador: number;
  login: string;
  email: string;
  nome: string;
  sobrenome: string;
  telefone: string;
}

const Detail: React.FC = () => {
  const [collaborator, setCollaborator] = useState<IResponse>();
  const { id } = useParams<{ id: string }>();
  const { token } = useAuth();

  useEffect(() => {
    api
      .get(`collaborators/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      .then((results) => {
        setCollaborator(results.data);
      })
      .catch((error) => console.log(error));
  }, [id]);

  return (
    <Container>
      <DetailHeader>
        <h1>Detalhes do Colaborador</h1>
      </DetailHeader>

      <DetailBody>
        {collaborator && (
          <>
            <div>
              <span>{`ID: ${collaborator.idColaborador}`}</span>
            </div>
            <div>
              <span>{`Login: ${collaborator.login}`}</span>
            </div>
            <div>
              <span>{`Email: ${collaborator.email}`}</span>
            </div>
            <div>
              <span>{`Nome: ${collaborator.nome}`}</span>
            </div>
            <div>
              <span>{`Sobrenome: ${collaborator.sobrenome}`}</span>
            </div>
            <div>
              <span>{`Telefone: ${collaborator.telefone}`}</span>
            </div>
          </>
        )}
      </DetailBody>
    </Container>
  );
};

export default Detail;
