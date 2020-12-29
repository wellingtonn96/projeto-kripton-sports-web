import styled, { css } from 'styled-components';

interface InputProps {
  IsFocused: boolean;
}

export const InputField = styled.div<InputProps>`
  display: flex;
  align-items: center;
  width: 100%;
  height: 45px;
  padding: 20px;
  margin-top: 10px;
  font-size: 14px;
  background: whitesmoke;
  border: none;
  margin-bottom: 20px;
  border-radius: 50px;
  ${(props) =>
    props.IsFocused &&
    css`
      border: 2px solid #111111;
      color: #111111;
    `}

  svg {
    margin-right: 15px;
  }

  input {
    width: 100%;
    background: transparent;
    border: 0;
  }
`;
