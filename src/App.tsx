import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import { GlobalProvider } from './hooks/Global';

import Routes from './routes';

import Toast from './components/Toast';

import { messagesToast } from './components/Toast/Data';

const App: React.FC = () => (
  <Router>
    <GlobalProvider>
      <GlobaStyle />
      <Routes />
      <Toast messages={messagesToast} />
    </GlobalProvider>
  </Router>
);

export default App;
