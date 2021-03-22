import styled from 'styled-components';

interface IPropsContainer {
  sideBar: boolean;
}

export const Container = styled.aside<IPropsContainer>`
  position: fixed;
  width: 18%;
  height: 100vh;
  background-color: #2a2a2a;
  font-weight: 500;
  left: ${({ sideBar }) => (sideBar ? '0' : '-18%')};
  z-index: 10;
  transition: 0.3s;

  div {
    position: relative;
    background-color: ${({ theme }) => theme.colors.primary};
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;

    img {
      height: 45px;
    }

    @media (max-width: 760px) {
      margin-top: 60px;
    }
  }

  @media (max-width: 760px) {
    width: 250px;
    left: ${({ sideBar }) => (sideBar ? '0' : '-250px')};
  }
`;
