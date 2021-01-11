import React from 'react';

import {
  Container,
  Main,
  Footer,
  Content,
  FooterModal,
  ContentModal,
} from './style';

import Header from '../../../components/Header';

// import SideBar from '../../../components/SideBar';

import SideNavBar from '../../../components/SideNavBar';

import { Modal } from '../../../components/Modal';
import { useSideBar } from '../../../hooks/SideBar';
import { useModal } from '../../../hooks/Modal';

const DefaultLayout: React.FC = ({ children }) => {
  const { showSideBar } = useSideBar();
  const { openModal } = useModal();

  return (
    <>
      <Modal header="Sair da sessão">
        <ContentModal>
          <p>Deseja realmente sair da sessão?</p>
        </ContentModal>
        <FooterModal>
          <button type="button">Sair</button>
          <button onClick={openModal} type="button">
            Cancelar
          </button>
        </FooterModal>
      </Modal>

      <Container>
        <SideNavBar />
        <Main showSideBar={showSideBar}>
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
