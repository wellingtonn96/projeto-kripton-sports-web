import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Sigin from '../pages/SignIn';
import Dashbaord from '../pages/Dashboard';
import Collaborators from '../pages/Collaborators';
import DefaultLayout from '../pages/_layouts/default';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Sigin} />
    <DefaultLayout>
      <Route path="/dashboard" component={Dashbaord} />
      <Route path="/collaborators" component={Collaborators} />
    </DefaultLayout>
  </Switch>
);

export default Routes;
