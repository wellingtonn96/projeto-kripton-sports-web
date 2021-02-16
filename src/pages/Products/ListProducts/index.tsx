import React, { useEffect, useState } from 'react';

import Table from '../../../components/Table';

import api from '../../../services/api';

import TableAction from '../../../components/Table/TableAction';
import { useAuth } from '../../../hooks/Auth';

interface IResponseData {
  id: number;
  idCategory: number;
  code: number;
  brand: string;
  name: string;
  productImg: string;
  description: string;
  expirationDate: Date;
  lot: number;
  statusProduct: string;
  value: number;
  stock: number;
  idSupplier: number;
}

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<IResponseData[]>([]);
  const { token } = useAuth();

  useEffect(() => {
    async function loadProducts() {
      const response = await api.get('products', {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const data = response.data.map((item: any) => {
        return {
          id: item.idProduto,
          idCategory: item.idCategoria,
          code: item.codigo,
          brand: item.marca,
          name: item.nome,
          productImg: item.produto_img,
          description: item.descricao,
          expirationDate: new Date(item.validade).toLocaleDateString('pt-br'),
          lot: item.lote,
          statusProduct: item.statusProduto,
          value: item.valor,
          stock: item.qtdeEstoque,
          idSupplier: item.idFornecedor,
        };
      });

      setProducts(data);
    }

    loadProducts();
  }, [token]);

  return (
    <>
      <Table header="Produtos" url="produtos/new">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Imagem</th>
              <th>Código</th>
              <th>Nome</th>
              <th>Marca</th>
              <th>Validade</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr>
                <td>{item.id}</td>
                <td>
                  <img
                    src={
                      item.productImg
                        ? `http://localhost:3333/files/${item.productImg}`
                        : 'https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg'
                    }
                    alt="imagem"
                    style={{
                      height: '40px',
                      width: '40px',
                      borderRadius: '50%',
                    }}
                  />
                </td>
                <td>{item.code}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.expirationDate}</td>
                <TableAction
                  urlPageDetail={`/produto/${item.id}`}
                  urlPageEdit={`/produto/edit/${item.id}`}
                  urlDelete={`produto/${item.id}`}
                />
              </tr>
            ))}
          </tbody>
        </table>
      </Table>
    </>
  );
};

export default Dashboard;
