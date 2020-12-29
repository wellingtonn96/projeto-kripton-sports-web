import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import { GlobalProvider } from './hooks/Global';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <GlobalProvider>
      <GlobaStyle />
      <Routes />
    </GlobalProvider>
  </Router>
);

export default App;
