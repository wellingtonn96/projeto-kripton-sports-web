import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 0px;

  input,
  select {
    width: 80%;
    height: 40px;
    font-size: 16px;
    color: #494949;
    border-radius: 5px;
    border: 1px solid gray;
    padding: 20px;
    background: none;

    @media (max-width: 760px) {
      width: 280px;
    }
  }

  div {
    width: 100px;
    margin-left: 10px;
    font-size: 14px;
    color: gray;
    text-transform: uppercase;
    margin-right: 25px;
    flex: 1;
  }
`;
