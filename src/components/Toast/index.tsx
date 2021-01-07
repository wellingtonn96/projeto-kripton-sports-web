import React from 'react';

import ToastMessage from './ToastMessage';

import { IMessageToastProps } from '../../hooks/Toast';

import { Container } from './style';

interface ToastProps {
  messages: IMessageToastProps[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  return (
    <Container messagesExists={!!messages.length}>
      {messages.map((item, index) => (
        <ToastMessage key={index.toString()} message={item} />
      ))}
    </Container>
  );
};

export default Toast;
