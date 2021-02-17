import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../../../services/api';
import { useAuth } from '../../../hooks/Auth';
import { Container, DetailHeader, DetailBody } from './style';

interface IResponseData {
  id: number;
  idCategory: number;
  code: number;
  brand: string;
  name: string;
  productImg: string;
  description: string;
  expirationDate: string;
  lot: number;
  statusProduct: string;
  value: number;
  stock: number;
  idSupplier: number;
}

const Detail: React.FC = () => {
  const [products, setProducts] = useState({} as IResponseData);
  const { id } = useParams<{ id: string }>();
  const { token } = useAuth();

  useEffect(() => {
    async function loadProduct() {
      const { data } = await api.get(`products/${id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      });

      const product: IResponseData = {
        id: data.idProduto,
        idCategory: data.idCategoria,
        code: data.codigo,
        brand: data.marca,
        name: data.nome,
        productImg: data.produto_img,
        description: data.descricao,
        expirationDate: new Date(data.validade).toLocaleDateString('pt-br'),
        lot: data.lote,
        statusProduct: data.statusProduto,
        value: data.valor,
        stock: data.qtdeEstoque,
        idSupplier: data.idFornecedor,
      };

      setProducts(product);
    }

    loadProduct();
  }, [token, id]);

  return (
    <Container>
      <DetailHeader>
        <h1>Detalhes do Colaborador</h1>
      </DetailHeader>

      <DetailBody>
        {products && (
          <>
            <div>
              <div>
                <img
                  src={`http://localhost:3333/files/${products.productImg}`}
                  alt="imagem do produto"
                />
              </div>
            </div>
            <div>
              <span>{`ID: ${products.id}`}</span>
            </div>
            <div>
              <span>{`ID Categoria: ${products.idCategory}`}</span>
            </div>
            <div>
              <span>{`Código: ${products.code}`}</span>
            </div>
            <div>
              <span>{`Marca: ${products.brand}`}</span>
            </div>
            <div>
              <span>{`Nome: ${products.name}`}</span>
            </div>
            <div>
              <span>{`Descrição: ${products.description}`}</span>
            </div>
            <div>
              <span>{`expirationDate: ${products.expirationDate}`}</span>
            </div>
            <div>
              <span>{`Lote: ${products.lot}`}</span>
            </div>
            <div>
              <span>{`Status do Produto: ${products.statusProduct}`}</span>
            </div>
            <div>
              <span>{`Valor: ${products.value}`}</span>
            </div>
            <div>
              <span>{`Estoque: ${products.stock}`}</span>
            </div>
            <div>
              <span>{`ID Fornecedor: ${products.idSupplier}`}</span>
            </div>
          </>
        )}
      </DetailBody>
    </Container>
  );
};

export default Detail;
