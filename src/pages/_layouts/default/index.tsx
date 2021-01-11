import React from 'react';

import { Container, Main, Footer, Content } from './style';

import Header from '../../../components/Header';

// import SideBar from '../../../components/SideBar';

import SideNavBar from '../../../components/SideNavBar';

import { Modal } from '../../../components/Modal';
import { useSideBar } from '../../../hooks/SideBar';

const DefaultLayout: React.FC = ({ children }) => {
  const { showSideBar } = useSideBar();

  return (
    <>
      <Modal />
      <Container>
        <SideNavBar />
        <Main showSideBar={showSideBar}>
          <Header />
          <Content>{children}</Content>

          <Footer>
            <p>
              {`Krypton Suplementos © ${new Date()
                .getFullYear()
                .toString()} | Todos os direitos reservados`}
            </p>
          </Footer>
        </Main>
      </Container>
    </>
  );
};

export default DefaultLayout;
