import React from 'react';

import ToastMessage from './ToastMessage';

import { IMessageProps } from './Data';

import { Container } from './style';

interface ToastProps {
  messages: IMessageProps[];
}

const Toast: React.FC<ToastProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map((item) => (
        <ToastMessage message={item} />
      ))}
    </Container>
  );
};

export default Toast;
