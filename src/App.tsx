import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import { GlobalProvider } from './hooks/Global';

import Routes from './routes';

import { ToastProvider } from './hooks/Toast';

const App: React.FC = () => (
  <Router>
    <ToastProvider>
      <GlobalProvider>
        <GlobaStyle />
        <Routes />
      </GlobalProvider>
    </ToastProvider>
  </Router>
);

export default App;
