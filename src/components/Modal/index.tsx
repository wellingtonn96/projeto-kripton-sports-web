import React, { useCallback, useEffect, useRef } from 'react';

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
  const { alert, removeAlert } = useModal();
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = (e: React.MouseEvent) => {
    if (modalRef.current === e.target) {
      removeAlert();
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && alert) {
        removeAlert();
      }
    },
    [alert, removeAlert]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => document.removeEventListener('keydown', keyPress);
  }, [keyPress]);

  return (
    <>
      {alert && (
        <LightBox onClick={closeModal} ref={modalRef}>
          <ModalWrapper>
            <Header>
              <h1>{alert.title}</h1>
              <CloseModalButton onClick={() => removeAlert()} />
            </Header>
            <Content>
              <p>{alert.description}</p>
            </Content>
            <Footer>
              <button type="button" onClick={alert.button.onClick}>
                {alert.button.title}
              </button>
              <button onClick={removeAlert} type="button">
                Cancelar
              </button>
            </Footer>
          </ModalWrapper>
        </LightBox>
      )}
    </>
  );
};
