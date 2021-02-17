import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';

import { FiUser } from 'react-icons/fi';

import * as Yup from 'yup';

import { useHistory, useParams } from 'react-router-dom';
import { Container } from './style';

import Input from '../../../components/Input';
import InputSelect from '../../../components/InputSelect';
import FormHeader from '../../../components/FormHeader';
import ButtonCancel from '../../../components/ButtonCancel';
import ButtonSave from '../../../components/ButtonSave';
import ButtonGroup from '../../../components/ButtonGroup';

import { Errors, getValidationErrors } from '../../../utils/getValidationErros';
import InputImageUpload from '../../../components/InputImageUpload';
import { useToast } from '../../../hooks/Toast';
import { useAuth } from '../../../hooks/Auth';
import api from '../../../services/api';
import InputTextArea from '../../../components/InputTextArea';

const NewProduct: React.FC = () => {
  const { addToast } = useToast();
  const history = useHistory();
  const { authentication } = useAuth();
  const { id } = useParams<{ id: string }>();

  const [idCategory, setIdCategory] = useState('');
  const [code, setCode] = useState('');
  const [brand, setBrand] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [expirationDate, setExpirationDate] = useState('');
  const [lot, setLot] = useState('');
  const [statusProduct, setStatusProduct] = useState('');
  const [value, setValue] = useState('');
  const [stock, setStock] = useState('');
  const [idSupplier, setIdSupplier] = useState('');
  const [file, setFile] = useState<FileList>();
  const [errors, setErrors] = useState<Errors>({});
  const [productImg, setProductImg] = useState('');

  useEffect(() => {
    async function loadProduct() {
      const { data } = await api.get(`products/${id}`, authentication);

      setIdCategory(data.idCategoria);
      setCode(data.codigo);
      setBrand(data.marca);
      setName(data.nome);
      setDescription(data.descricao);
      setExpirationDate(data.validade);
      setLot(data.lote);
      setStatusProduct(data.statusProduto);
      setValue(data.valor);
      setStock(data.qtdeEstoque);
      setIdSupplier(data.idFornecedor);
      setProductImg(data.produto_img);
    }

    loadProduct();
  }, [authentication, id]);

  const uploadImage = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFile(e.target.files);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const schema = Yup.object().shape({
        idCategory: Yup.string().required(),
        code: Yup.string().required(),
        brand: Yup.string().required(),
        name: Yup.string().required(),
        description: Yup.string().required(),
        expirationDate: Yup.string().required(),
        lot: Yup.string().required(),
        statusProduct: Yup.string().required(),
        value: Yup.string().required(),
        stock: Yup.string().required(),
        idSupplier: Yup.string().required(),
      });

      await schema.validate(
        {
          idCategory,
          code,
          brand,
          name,
          description,
          expirationDate,
          lot,
          statusProduct,
          value,
          stock,
          idSupplier,
        },
        {
          abortEarly: false,
        }
      );

      const data = {
        idCategoria: parseFloat(idCategory),
        codigo: parseFloat(code),
        marca: brand,
        nome: name,
        descricao: description,
        validade: expirationDate,
        lote: parseFloat(lot),
        statusProduto: statusProduct,
        valor: parseFloat(value),
        qtdeEstoque: parseFloat(stock),
        idFornecedor: parseFloat(idSupplier),
      };

      const response = await api.put(`products/${id}`, data, authentication);

      if (file) {
        const dataFile = new FormData();

        dataFile.append('produto_img', file[0]);

        const { idProduto } = response.data;

        await api.patch(`products/${idProduto}`, dataFile, authentication);
      }

      addToast({
        type: 'success',
        title: 'Sucesso!',
        description: 'Colaborador cadastrado com sucesso!',
      });

      history.push('/produtos');

      setErrors({});
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
  };

  return (
    <Container>
      <h1>EditarProduto</h1>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <FormHeader title="Informações Pessoais" icon={FiUser} />

        <InputImageUpload
          name="avatar_id"
          file={file}
          onChange={uploadImage}
          previewServer={productImg}
        />

        <InputSelect
          label="Categoria"
          name="categoria"
          value={idCategory}
          onChange={(e) => setIdCategory(e.target.value)}
          error={errors.idCategory}
        >
          <option value="">Selecione uma categoria</option>
          <option value="1">Massa</option>
          <option value="2">Creatina</option>
        </InputSelect>

        <Input
          label="Codigo"
          name="code"
          type="text"
          value={code}
          onChange={(e) => setCode(e.target.value)}
          error={errors.code}
        />

        <Input
          name="Marca"
          label="brand"
          value={brand}
          onChange={(e) => setBrand(e.target.value)}
          error={errors.brand}
        />

        <Input
          label="Nome"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          error={errors.name}
        />

        <FormHeader title="Perfil de usuário" icon={FiUser} />

        <Input
          label="Validade"
          name="expirationDate"
          type="date"
          value={expirationDate}
          onChange={(e) => setExpirationDate(e.target.value)}
        />

        <Input
          label="Lote"
          name="lot"
          type="text"
          value={lot}
          onChange={(e) => setLot(e.target.value)}
          error={errors.lot}
        />

        <Input
          label="Status do Produto"
          name="statusProduct"
          type="text"
          value={statusProduct}
          onChange={(e) => setStatusProduct(e.target.value)}
          error={errors.statusProduct}
        />

        <Input
          label="Valor"
          name="value"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={errors.value}
        />

        <Input
          label="Quantidade stoque"
          name="stock"
          type="text"
          value={stock}
          onChange={(e) => setStock(e.target.value)}
          error={errors.stock}
        />

        <InputSelect
          label="Fornecedor"
          name="supplier"
          value={idSupplier}
          onChange={(e) => setIdSupplier(e.target.value)}
          error={errors.supplier}
        >
          <option value="">Selecione o tipo de colaborador</option>
          <option value="1">Fornecedor 1</option>
          <option value="3">Fornecedor 2</option>
          <option value="4">Fornecedor 3</option>
        </InputSelect>

        <InputTextArea
          label="Descrição"
          name="description"
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          error={errors.description}
        />

        <ButtonGroup>
          <ButtonSave />
          <ButtonCancel />
        </ButtonGroup>
      </form>
    </Container>
  );
};

export default NewProduct;
