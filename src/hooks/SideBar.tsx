import React, { createContext, useContext, useState } from 'react';

interface SideBarContextData {
  showSideBar: boolean;
  showOrHideSideBar(): void;
}

const SideBarContex = createContext({} as SideBarContextData);

const SideBarProvider: React.FC = ({ children }) => {
  const [showSideBar, setShowSideBar] = useState(true);

  const showOrHideSideBar = () => {
    setShowSideBar((prev) => !prev);
  };

  return (
    <SideBarContex.Provider value={{ showSideBar, showOrHideSideBar }}>
      {children}
    </SideBarContex.Provider>
  );
};

const useSideBar = (): SideBarContextData => {
  const context = useContext(SideBarContex);

  return context;
};

export { SideBarProvider, useSideBar };
