import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Signin from '../pages/Sigin';
import SignUp from '../pages/SignUp';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Signin} />
    <Route path="/sigin-up" component={SignUp} />
  </Switch>
);

export default Routes;
