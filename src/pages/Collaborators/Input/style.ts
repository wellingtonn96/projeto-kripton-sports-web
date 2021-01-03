import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0px;

  div:first-child {
    width: 100px;
    margin-left: 10px;
    font-size: 14px;
    color: gray;
    text-transform: uppercase;
    margin-right: 25px;
  }
`;

interface IPropsInputField {
  isErrored: boolean;
  isFocused: boolean;
}

export const InputField = styled.div<IPropsInputField>`
  width: 80%;

  input,
  select {
    width: 100%;
    height: 40px;
    font-size: 16px;
    color: #494949;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 20px;
    background: none;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: #c53030;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 5px #c53030;
      `}

    ${(props) =>
      props.isFocused &&
      css`
        border-color: #57b0fa;
        box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075) inset, 0 0 5px #57b0fa;
      `}


    @media (max-width: 760px) {
      width: 280px;
    }
  }
  div {
    display: flex;
    align-items: center;
    position: absolute;
    margin-top: 5px;

    p {
      font-size: 14px;
      color: #c53030;
      font-weight: 500;
      margin-left: 5px;
      text-transform: uppercase;
    }
  }
`;
