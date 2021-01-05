import React, { useCallback, useState } from 'react';
import { FiAlertCircle } from 'react-icons/fi';

import { Container, InputField } from './style';

interface IPropsInput extends React.InputHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  error?: string;
}

const InputTextArea: React.FC<IPropsInput> = ({ label, error, ...rest }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <div>
        {error ? (
          <span style={{ color: '#c53030' }}>{label}</span>
        ) : (
          <span>{label}</span>
        )}
      </div>
      <InputField isErrored={!!error} isFocused={isFocused}>
        <textarea
          onFocus={handleInput}
          onBlur={handleInputBlur}
          type="text"
          {...rest}
        />
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

export default InputTextArea;
