import React, {
  useCallback,
  useState,
  InputHTMLAttributes,
  useRef,
} from 'react';

import { IconBaseProps } from 'react-icons/lib';

import { InputField } from './style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...rest }) => {
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
    <InputField isFilled={isFilled} IsFocused={isFocused}>
      {Icon && <Icon size={20} />}
      <input
        onFocus={handleInput}
        onBlur={handleInputBlur}
        {...rest}
        ref={inputRef}
      />
    </InputField>
  );
};

export default Input;
