import styled, { css } from 'styled-components';

import background from '../../assets/background2.jpg';

export const Container = styled.div`
  background: url(${background}) no-repeat center;
  height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 430px;
  height: 500px;
  background-color: white;
  border-radius: 5px;
  font-weight: 500;
  color: #707070;

  img {
    display: flex;
    margin: 0 auto;
    margin-bottom: 20px;
  }

  form {
    width: 300px;

    input {
      width: 100%;
      background: transparent;
      border: 0;
    }

    button {
      width: 300px;
      height: 45px;
      border: none;
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 20px;
      border-radius: 50px;
      text-transform: capitalize;
      background: linear-gradient(
        90deg,
        rgba(237, 237, 237, 1) 0%,
        rgba(253, 29, 29, 1) 0%,
        rgba(183, 30, 34, 1) 0%,
        rgba(163, 0, 5, 1) 28%,
        rgba(244, 120, 120, 1) 100%
      );
      box-shadow: 0 8px 16px 0 rgba(40, 40, 90, 0.09),
        0 3px 6px 0 rgba(0, 0, 0, 0.065);
      color: white;
    }
  }

  p {
    color: #707070;
    font-size: 14px;

    a {
      margin-left: 2px;
      text-decoration: transparent;
      color: #909090;
      font-size: 14px;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`;

interface InputProps {
  IsFocused: boolean;
  isFilled: boolean;
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

  ${(props) =>
    props.isFilled &&
    css`
      color: #301c16;
    `}


  svg {
    margin-right: 15px;
  }
`;
