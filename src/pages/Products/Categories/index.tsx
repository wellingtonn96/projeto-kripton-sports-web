import React, { useEffect, useState } from 'react';
import TableContainer from '../../../components/Table';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/Auth';
import { useToast } from '../../../hooks/Toast';

interface IResponse {
  idCategoria: number;
  categoria: string;
}

const Categories: React.FC = () => {
  const [categories, setCategories] = useState<IResponse[]>([]);
  const { authentication } = useAuth();
  const { addToast } = useToast();

  useEffect(() => {
    async function loadCategories(): Promise<void> {
      try {
        const response = await api.get('categories', authentication);

        setCategories(response.data);
      } catch (error) {
        addToast({
          type: 'error',
          title: 'Erro!',
          description: 'Erro interno no servidor!',
        });
      }
    }

    loadCategories();
  }, [addToast, authentication]);

  return (
    <>
      <TableContainer url="categoria/new" header="categorias">
        <table>
          <thead>
            <th>id</th>
            <th>nome</th>
          </thead>
          <tbody>
            {categories.map((item) => (
              <tr>
                <td>{item.idCategoria}</td>
                <td>{item.categoria}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </>
  );
};

export default Categories;
