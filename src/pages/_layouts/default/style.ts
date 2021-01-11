import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  width: 100%;
  display: flex;
`;

interface IPropsMain {
  showSideBar: boolean;
}

export const Main = styled.main<IPropsMain>`
  width: 100%;
  margin-left: ${({ showSideBar }) => (showSideBar ? '250px' : '0')};
  transition: -350ms;

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

export const ContentModal = styled.div`
  padding: 20px 30px;
  border-bottom: 2px solid #eeee;
`;

export const FooterModal = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: row-reverse;

  button {
    padding: 10px;
    border-radius: 5px;
    border: 0;
    text-transform: capitalize;
    right: 0;
    margin-left: 5px;
    background: #f40e0e;
    color: white;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#F40E0E')};
    }
  }

  button + button {
    background: #cccc;
    color: #111111;
    transition: background-color 0.3s;

    &:hover {
      background: ${shade(0.2, '#cccc')};
    }
  }
`;
