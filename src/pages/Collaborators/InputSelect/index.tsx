import React from 'react';

import { Container } from './style';

interface IPropsInput extends React.InputHTMLAttributes<HTMLSelectElement> {
  label: string;
}

const Input: React.FC<IPropsInput> = ({ label, children, ...rest }) => {
  return (
    <Container>
      <div>
        <span>{label}</span>
      </div>
      <select {...rest}>{children}</select>
    </Container>
  );
};

export default Input;
