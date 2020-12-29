import React, { useCallback, useRef, useState } from 'react';
import { FiUser, FiLock } from 'react-icons/fi';

import LogoImg from '../../assets/logo.png';

import { Container, Content, InputField } from './style';

const SignIn: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleInput = useCallback(() => {
    setIsFocused(true);
  }, []);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
  }, []);

  return (
    <Container>
      <Content>
        <img src={LogoImg} alt="kripton suplementos" />

        <form>
          <label htmlFor="login">
            Login
            <InputField isFilled={isFilled} IsFocused={isFocused}>
              <FiUser size={20} />
              <input
                onFocus={handleInput}
                onBlur={handleInputBlur}
                type="text"
                placeholder="Digite seu login"
                value={login}
                onChange={(e) => setLogin(e.target.value)}
              />
            </InputField>
          </label>

          <label htmlFor="inputPassword">
            Senha
            <InputField
              ref={inputRef}
              isFilled={isFilled}
              IsFocused={isFocused}
            >
              <FiLock size={20} />
              <input
                ref={inputRef}
                onFocus={handleInput}
                onBlur={handleInputBlur}
                type="password"
                placeholder="Digite sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </InputField>
          </label>

          <button type="submit" value="submit">
            Entrar
          </button>
        </form>

        <p>
          Esqueceu a senha?
          <a href="/">Redefinir senha</a>
        </p>
      </Content>
    </Container>
  );
};

export default SignIn;
