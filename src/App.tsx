import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import { ModalProvider } from './hooks/Modal';
import { SideBarProvider } from './hooks/SideBar';
import { ToastProvider } from './hooks/Toast';
import { AuthProvider } from './hooks/Auth';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <ModalProvider>
        <SideBarProvider>
          <ToastProvider>
            <GlobaStyle />
            <Routes />
          </ToastProvider>
        </SideBarProvider>
      </ModalProvider>
    </AuthProvider>
  </Router>
);

export default App;
