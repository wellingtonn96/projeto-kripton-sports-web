import React, { createContext, useContext, useState } from 'react';

interface ModalContextData {
  showModal: boolean;
  openModal(): void;
  showSideBar: boolean;
  showOrHideSideBar(): void;
}

const ModalContext = createContext({} as ModalContextData);

const ModalProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const showOrHideSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <ModalContext.Provider
      value={{ showModal, openModal, showSideBar, showOrHideSideBar }}
    >
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  return context;
};

export { ModalProvider, useModal };
