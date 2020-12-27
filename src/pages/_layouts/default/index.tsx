import React from 'react';

import { Container, Main, Footer, Content } from './style';

import Header from '../../../components/Header';
import AsideMenu from '../../../components/AsideMenu';

import { Modal } from '../../../components/Modal';

const DefaultLayout: React.FC = ({ children }) => {
  return (
    <>
      <Modal />
      <Container>
        <AsideMenu />
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
