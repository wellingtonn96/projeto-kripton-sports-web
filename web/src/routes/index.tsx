import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/Sigin';
import SignUp from '../pages/SignUp';
import Profile from '../pages/Profile';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/sigin-up" component={SignUp} />
    <Route path="/Profile" component={Profile} />
    <Route path="/Dashboard" component={Dashboard} />
  </Switch>
);

export default Routes;
