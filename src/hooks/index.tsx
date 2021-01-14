import React from 'react';

import { AuthProvider } from './Auth';
import { ModalProvider } from './Modal';
import { SideBarProvider } from './SideBar';
import { ToastProvider } from './Toast';

const GlobalProvider: React.FC = ({ children }) => {
  return (
    <AuthProvider>
      <ModalProvider>
        <SideBarProvider>
          <ToastProvider>{children}</ToastProvider>
        </SideBarProvider>
      </ModalProvider>
    </AuthProvider>
  );
};

export default GlobalProvider;
