import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import { GlobalProvider } from './hooks/Global';

import Routes from './routes';

import Toast from './components/Toast';

const App: React.FC = () => (
  <Router>
    <GlobalProvider>
      <GlobaStyle />
      <Routes />
      <Toast />
    </GlobalProvider>
  </Router>
);

export default App;
