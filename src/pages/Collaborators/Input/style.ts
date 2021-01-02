import styled from 'styled-components';

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

export const InputField = styled.div`
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
    z-index: -1;

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
