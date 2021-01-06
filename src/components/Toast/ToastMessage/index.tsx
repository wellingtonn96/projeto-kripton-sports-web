import React from 'react';
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from 'react-icons/fi';

import { IMessageProps } from '../Data';

import { Container } from './style';

interface IToastPropsMessage {
  message: IMessageProps;
}

const ToastMessage: React.FC<IToastPropsMessage> = ({ message }) => {
  const icon = {
    success: <FiCheckCircle size={24} />,
    info: <FiInfo size={24} />,
    error: <FiAlertCircle size={24} />,
  };

  return (
    <Container type={message.type}>
      {icon[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        <p>{message.description}</p>
      </div>
      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default ToastMessage;
