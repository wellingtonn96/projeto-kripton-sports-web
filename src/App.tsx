import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import { ModalProvider } from './hooks/Modal';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <ModalProvider>
      <GlobaStyle />
      <Routes />
    </ModalProvider>
  </Router>
);

export default App;
