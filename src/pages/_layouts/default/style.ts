import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

export const Main = styled.main`
  width: 82%;
  margin-left: 18%;

  @media (max-width: 760px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const Content = styled.div`
  margin-top: 60px;
  padding: 20px;
`;

export const Footer = styled.div`
  width: 100%;
  font-size: 15px;
  text-align: center;
  padding: 20px;
  background-color: #ffffff;

  @media (max-width: 760px) {
    width: 100%;
    margin-top: 0;
  }
`;
