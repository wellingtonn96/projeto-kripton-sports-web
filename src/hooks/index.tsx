import React from 'react';

import { AuthProvider } from './Auth';
import { ModalProvider } from './Modal';
import { SideBarProvider } from './SideBar';
import { ToastProvider } from './Toast';
import { AppProvider } from './App';

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <AppProvider>
        <ModalProvider>
          <SideBarProvider>
            <ToastProvider>{children}</ToastProvider>
          </SideBarProvider>
        </ModalProvider>
      </AppProvider>
    </AuthProvider>
  );
};

export default GlobalProvider;
