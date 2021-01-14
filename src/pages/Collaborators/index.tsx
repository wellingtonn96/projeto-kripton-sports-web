import React, { useCallback, useEffect, useState } from 'react';

import Table from '../../components/Table';

import api from '../../services/api';

import TableAction from '../../components/Table/TableAction';
import { useAuth } from '../../hooks/Auth';

interface IResponseData {
  idColaborador: number;
  login: string;
  email: string;
  nome: string;
  sobrenome: string;
  telefone: string;
  idTipo: number;
}

const Dashboard: React.FC = () => {
  const [collaborators, setCollaborators] = useState<IResponseData[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    try {
      api
        .get('collaborators', {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setCollaborators(response.data);
        });
    } catch (err) {
      console.log(err);
    }
  }, [token]);

  return (
    <>
      <Table header="Colaboradores" url="collaborators_new">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Login</th>
              <th>Email</th>
              <th>Nome</th>
              <th>Sobrenome</th>
              <th>Telefone</th>
              <th>Id tipo</th>
              <th>Ações</th>
            </tr>
          </thead>
          {collaborators.map((item) => (
            <tr>
              <td>{item.idColaborador}</td>
              <td>{item.login}</td>
              <td>{item.email}</td>
              <td>{item.nome}</td>
              <td>{item.sobrenome}</td>
              <td>{item.telefone}</td>
              <td>{item.idTipo}</td>
              <TableAction />
            </tr>
          ))}
        </table>
      </Table>
    </>
  );
};

export default Dashboard;
