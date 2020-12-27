import React, { useCallback, useEffect, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import { useModal } from '../../hooks/Modal';

import {
  LightBox,
  ModalWrapper,
  CloseModalButton,
  Header,
  Content,
  Footer,
} from './style';

export const Modal: React.FC = () => {
  const history = useHistory();
  const { showModal, openModal } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      openModal();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        openModal();
      }
    },
    [showModal, openModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {showModal && (
        <LightBox onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <Header>
              <h1>Sair da sessão?</h1>
              <CloseModalButton onClick={() => openModal()} />
            </Header>
            <Content>
              <p>Deseja realmente sair da sessão</p>
            </Content>
            <Footer>
              <button type="button" onClick={() => history.push('/')}>
                Sair
              </button>
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
