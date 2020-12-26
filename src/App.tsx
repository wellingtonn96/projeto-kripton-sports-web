import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobaStyle from './styles/global';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <GlobaStyle />
    <Routes />
  </Router>
);

export default App;
