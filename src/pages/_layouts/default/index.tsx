import React from 'react';

import { Container, Main, Footer, Content } from './style';

import Header from '../../../components/Header';

// import SideBar from '../../../components/SideBar';

import SideNavBar from '../../../components/SideNavBar';

import { Modal } from '../../../components/Modal';
import { useGlobal } from '../../../hooks/Global';

const DefaultLayout: React.FC = ({ children }) => {
  const { showSideBar } = useGlobal();

  return (
    <>
      <Modal />
      <Container>
        <SideNavBar />
        <Main showModal={showSideBar}>
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
