import React, {
  useCallback,
  useState,
  useRef,
  InputHTMLAttributes,
} from 'react';
import { FiUser } from 'react-icons/fi';
import { IconBaseProps } from 'react-icons/lib';

import { InputField } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon }) => {
  const [isFocused, setIsFocused] = useState(false);

  const handleInput = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <InputField IsFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInput}
        onBlur={handleInputBlur}
        type="password"
        placeholder="Digite sua senha"
      />
    </InputField>
  );
};

export default Input;
