import React, { createContext, useContext, useState } from 'react';

interface ModalContextData {
  showModal: boolean;
  openModal(): void;
}

const ModalContex = createContext({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <ModalContex.Provider value={{ showModal, openModal }}>
      {children}
    </ModalContex.Provider>
  );
};

const useModal = (): ModalContextData => {
  const context = useContext(ModalContex);

  return context;
};

export { ModalProvider, useModal };
