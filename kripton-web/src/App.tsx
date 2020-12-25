import React from 'react';

import GlobaStyle from './styles/global';

import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => (
  <>
    <Dashboard />
    <GlobaStyle />
  </>
);

export default App;
