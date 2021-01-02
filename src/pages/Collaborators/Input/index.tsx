import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, InputField } from './style';

interface IPropsInput extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const Input: React.FC<IPropsInput> = ({ label, error, ...rest }) => {
  return (
    <Container>
      <div>
        <span>{label}</span>
      </div>
      <InputField>
        <input type="text" {...rest} />
        {error && (
          <div>
            <FiAlertCircle size={18} color="#c53030" />
            <p>{error}</p>
          </div>
        )}
      </InputField>
    </Container>
  );
};

export default Input;
