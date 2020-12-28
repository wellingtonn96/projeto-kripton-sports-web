import styled from 'styled-components';

export const Container = styled.aside`
  position: fixed;
  width: 18%;
  height: 100vh;
  background-color: #222222;
  font-weight: 500;

  div {
    background-color: #ffffff;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img {
      height: 60px;
    }
  }

  @media (max-width: 760px) {
    display: none;
  }
`;
