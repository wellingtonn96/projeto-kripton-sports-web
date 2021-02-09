import React, { useCallback, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import {
  MdCreate,
  MdDeleteForever,
  MdMoreHoriz,
  MdVisibility,
} from 'react-icons/md';
import { useAuth } from '../../../hooks/Auth';
import { useModal } from '../../../hooks/Modal';
import { useToast } from '../../../hooks/Toast';

import { Container, Action } from './style';
import api from '../../../services/api';

interface ITableActionProps {
  urlPageDetail?: string;
  urlPageEdit?: string;
  urlDelete?: string;
}

const TableAction: React.FC<ITableActionProps> = ({
  urlPageDetail,
  urlPageEdit,
  urlDelete,
}) => {
  const [visible, setVisible] = useState(false);
  const { comfirmAlert, removeAlert } = useModal();
  const { token } = useAuth();
  const { addToast } = useToast();

  const handleDelete = useCallback(async () => {
    console.log('clickou aqui');

    if (urlDelete) {
      try {
        await api.delete(urlDelete, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        removeAlert();

        addToast({
          type: 'success',
          description: `Colaborador excluido com sucesso!`,
          title: 'Erro ao deletarr',
        });
      } catch (err) {
        addToast({
          type: 'error',
          description: `Ocorreu um erro ao deletar!`,
          title: 'Erro ao deletarr',
        });
      }
    }
  }, [token, urlDelete, addToast, removeAlert]);

  const comrimDelete = useCallback(() => {
    comfirmAlert({
      title: 'Deletar produto!',
      description: 'Deseja realmente deletar produto',
      button: {
        onClick: () => handleDelete(),
        title: 'deletar',
      },
    });
  }, [comfirmAlert, handleDelete]);

  return (
    <>
      <Container>
        <button type="button" onClick={() => setVisible((prev) => !prev)}>
          <MdMoreHoriz size={22} color="#c6c6c6" />
        </button>

        <Action visible={visible}>
          {urlPageDetail && (
            <Link to={urlPageDetail}>
              <div>
                <MdVisibility size={18} color="#4D85EE" />
                Visualizar
              </div>
            </Link>
          )}
          {urlPageEdit && (
            <Link to={urlPageEdit}>
              <div>
                <MdCreate size={18} color="yellow" />
                Editar
              </div>
            </Link>
          )}
          <div>
            <button type="button" onClick={comrimDelete}>
              <MdDeleteForever size={18} color="#DE3B3B" />
              Excluir
            </button>
          </div>
        </Action>
      </Container>
    </>
  );
};

export default TableAction;
