import React, {
  useCallback,
  useState,
  InputHTMLAttributes,
  useRef,
} from 'react';

import { FiAlertCircle } from 'react-icons/fi';

import { IconBaseProps } from 'react-icons/lib';

import { InputField, Error } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string | undefined;
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ error, name, icon: Icon, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInput = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  return (
    <InputField isFilled={isFilled} IsFocused={isFocused} isErrored={!!error}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInput}
        onBlur={handleInputBlur}
        ref={inputRef}
        {...rest}
      />
      {error && (
        <Error title={error}>
          <FiAlertCircle size={18} color="#c53030" />
        </Error>
      )}
    </InputField>
  );
};

export default Input;
