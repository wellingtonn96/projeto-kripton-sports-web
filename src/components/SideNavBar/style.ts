import styled from 'styled-components';

interface IPropsContainer {
  sideBar: boolean;
}

export const Container = styled.aside<IPropsContainer>`
  position: fixed;
  width: 250px;
  height: 100vh;
  background-color: #222222;
  font-weight: 500;
  left: ${({ sideBar }) => (sideBar ? '0' : '-100%')};
  z-index: 10;

  div {
    position: relative;
    background-color: #ffffff;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img {
      height: 60px;
    }

    @media (max-width: 760px) {
      margin-top: 60px;
    }
  }
`;
