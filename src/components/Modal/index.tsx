import React from 'react';

import { useModal } from '../../hooks/Modal';

// import { MdClose } from 'react-icons/md';

import {
  LightBox,
  ModalWrapper,
  CloseModalButton,
  Header,
  Content,
  Footer,
} from './style';

export const Modal: React.FC = () => {
  const { showModal, openModal } = useModal();

  return (
    <>
      {showModal && (
        <LightBox>
          <ModalWrapper>
            <Header>
              <h1>Sair da sessão?</h1>
              <CloseModalButton onClick={() => openModal()} />
            </Header>
            <Content>
              <p>Deseja realmente sair da sessão</p>
            </Content>
            <Footer>
              <button type="button">Sair</button>
              <button onClick={() => openModal()} type="button">
                Cancelar
              </button>
            </Footer>
          </ModalWrapper>
        </LightBox>
      )}
    </>
  );
};
