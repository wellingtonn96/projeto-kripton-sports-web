import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import Routes from './routes';
import GlobalProvider from './hooks';

const App: React.FC = () => (
  <Router>
    <GlobalProvider>
      <GlobaStyle />
      <Routes />
    </GlobalProvider>
  </Router>
);

export default App;
