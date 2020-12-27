import React, { createContext, useContext, useState } from 'react';

interface ModalContextData {
  showModal: boolean;
  openModal(): void;
}

const ModalContext = createContext({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ showModal, openModal }}>
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  return context;
};

export { ModalProvider, useModal };
