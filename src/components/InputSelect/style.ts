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
    color: ${({ theme }) => theme.colors.text};
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

  select {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    font-size: 16px;
    color: ${({ theme }) => theme.colors.text};
    border-radius: 5px;
    border: 1px solid gray;
    padding: 12px;
    background: none;
    transition: all 0.3s ease-in-out;

    ${(props) =>
      props.isErrored &&
      css`
        border-color: #f79ea6;
        box-shadow: 0 0 5px #f79ea6;
      `}

    ${(props) =>
      props.isFocused &&
      css`
        border-color: rgba(81, 203, 238, 1);
        box-shadow: 0 0 5px rgba(81, 203, 238, 1);
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
      margin-left: 5px;
      text-transform: uppercase;
    }
  }
`;
