import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Routes';

import Sigin from '../pages/SignIn';
import Dashbaord from '../pages/Dashboard';
import NewCollaborators from '../pages/NewCollaborators';
import Collaborators from '../pages/Collaborators';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Sigin} />
    <Route path="/dashboard" component={Dashbaord} isPrivate />
    <Route path="/collaborators" component={Collaborators} isPrivate />
    <Route path="/collaborators_new" component={NewCollaborators} isPrivate />
  </Switch>
);

export default Routes;
