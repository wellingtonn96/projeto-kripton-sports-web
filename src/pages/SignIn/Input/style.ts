import styled, { css } from 'styled-components';
import Tootip from './Tootip';

interface InputProps {
  IsFocused: boolean;
  isFilled: boolean;
  isErrored: boolean;
}

export const InputField = styled.div<InputProps>`
  position: relative;
  width: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: whitesmoke;
  height: 45px;
  margin-top: 10px;
  font-size: 14px;
  border: none;
  margin-bottom: 20px;
  border-radius: 50px;
  border: 2px solid #eeee;
  color: #aaaaaa;

  ${(props) =>
    props.IsFocused &&
    css`
      color: #000000;
      border-color: #000000;
    `}

  ${(props) =>
    props.isFilled &&
    css`
      color: #000000;
      font-weight: 500;
    `}

  ${(props) =>
    props.isErrored &&
    css`
      color: #c53030;
      border-color: #c53030;
    `}

  input {
    background-color: transparent;
    width: 250px;
    padding: 0 25px 0 10px;
    border: 0;

    &::placeholder {
      color: #aaaaaa;
    }
  }
`;

export const Error = styled(Tootip)`
  height: 20px;

  svg {
    position: absolute;
    margin: 0;
    right: 0px;
  }

  span {
    color: #fff;
    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
