import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

interface IPropsMain {
  showSideBar: boolean;
}

export const Main = styled.main<IPropsMain>`
  width: ${({ showSideBar }) => (showSideBar ? '82%' : '100%')};
  margin-left: ${({ showSideBar }) => (showSideBar ? '18%' : '0')};
  transition: 0.3s;

  @media (max-width: 760px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  margin-top: 40px;
  padding: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding: 20px;
  background-color: ${({ theme }) => theme.colors.primary};

  @media (max-width: 760px) {
    width: 100%;
    margin-top: 0;
  }
`;
