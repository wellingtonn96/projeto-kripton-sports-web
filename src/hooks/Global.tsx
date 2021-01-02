import React, { createContext, useContext, useState } from 'react';

interface GlobalContextData {
  showModal: boolean;
  openModal(): void;
  showSideBar: boolean;
  showOrHideSideBar(): void;
}

const GlobalContex = createContext({} as GlobalContextData);

const GlobalProvider: React.FC = ({ children }) => {
  const [showModal, setShowModal] = useState(false);
  const [showSideBar, setShowSideBar] = useState(true);

  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  const showOrHideSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <GlobalContex.Provider
      value={{ showModal, openModal, showSideBar, showOrHideSideBar }}
    >
      {children}
    </GlobalContex.Provider>
  );
};

const useGlobal = (): GlobalContextData => {
  const context = useContext(GlobalContex);

  return context;
};

export { GlobalProvider, useGlobal };
