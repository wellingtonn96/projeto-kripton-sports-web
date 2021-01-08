import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
  MdCreate,
  MdDeleteForever,
  MdMoreHoriz,
  MdVisibility,
} from 'react-icons/md';

import { Container, Action } from './style';

const TableAction: React.FC = () => {
  const [visible, setVisible] = useState(false);

  return (
    <Container>
      <button type="button" onClick={() => setVisible((prev) => !prev)}>
        <MdMoreHoriz size={22} color="#c6c6c6" />
      </button>

      <Action visible={visible}>
        <div>
          <button type="button">
            <MdVisibility size={18} color="#4D85EE" />
            Visualizar
          </button>
        </div>
        <div>
          <Link to="/">
            <MdCreate size={18} color="yellow" />
            Editar
          </Link>
        </div>
        <div>
          <button type="button">
            <MdDeleteForever size={18} color="#DE3B3B" />
            Excluir
          </button>
        </div>
      </Action>
    </Container>
  );
};

export default TableAction;
