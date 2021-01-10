import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import { GlobalProvider } from './hooks/Global';
import { ToastProvider } from './hooks/Toast';
import { AuthProvider } from './hooks/Auth';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <AuthProvider>
      <ToastProvider>
        <GlobalProvider>
          <GlobaStyle />
          <Routes />
        </GlobalProvider>
      </ToastProvider>
    </AuthProvider>
  </Router>
);

export default App;
