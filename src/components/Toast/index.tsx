import React from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { Container, ToastMessage } from './style';

const Toast: React.FC = () => {
  return (
    <Container>
      <ToastMessage type="error">
        <FiAlertCircle size={24} />
        <div>
          <strong>Sucesso!</strong>
          <p>Cadastro realizado com sucesso!</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastMessage>
      <ToastMessage type="success">
        <FiCheckCircle size={24} />
        <div>
          <strong>Sucesso!</strong>
          <p>Cadastro realizado com sucesso!</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastMessage>
      <ToastMessage>
        <FiInfo size={24} />
        <div>
          <strong>Sucesso!</strong>
          <p>Cadastro realizado com sucesso!</p>
        </div>
        <button type="button">
          <FiXCircle size={18} />
        </button>
      </ToastMessage>
    </Container>
  );
};

export default Toast;
