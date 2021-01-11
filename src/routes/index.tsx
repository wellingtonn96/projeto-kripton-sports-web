import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Routes';

import Sigin from '../pages/SignIn';
import Dashbaord from '../pages/Dashboard';
import Collaborators from '../pages/Collaborators';
import DefaultLayout from '../pages/_layouts/default';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Sigin} />
    <DefaultLayout>
      <Route path="/dashboard" component={Dashbaord} isPrivate />
      <Route path="/collaborators" component={Collaborators} isPrivate />
    </DefaultLayout>
  </Switch>
);

export default Routes;
