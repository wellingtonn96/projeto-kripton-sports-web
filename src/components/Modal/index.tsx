import React, { useCallback, useEffect, useRef } from 'react';
import { useAuth } from '../../hooks/Auth';
import { useModal } from '../../hooks/Modal';

import { LightBox, ModalWrapper, CloseModalButton, Header } from './style';

interface ModalProps {
  header: string;
}

export const Modal: React.FC<ModalProps> = ({ header, children }) => {
  const { showModal, openModal } = useModal();
  const { signOut } = useAuth();
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
              <h1>{header}</h1>
              <CloseModalButton onClick={openModal} />
            </Header>
            {children}
          </ModalWrapper>
        </LightBox>
      )}
    </>
  );
};
