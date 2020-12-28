import React from 'react';

import { Container, Main, Footer, Content } from './style';

import Header from '../../../components/Header';

// import SideBar from '../../../components/SideBar';

import SideNavBar from '../../../components/SideNavBar';

import { Modal } from '../../../components/Modal';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Modal />
      <Container>
        <SideNavBar />
        <Main>
          <Header />
          <Content>{children}</Content>

          <Footer>
            <p>Krypton Suplementos © 2020 | Todos os direitos reservados.</p>
          </Footer>
        </Main>
      </Container>
    </>
  );
};

export default DefaultLayout;
