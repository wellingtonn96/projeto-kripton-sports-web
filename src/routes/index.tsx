import React from 'react';

import { Switch } from 'react-router-dom';

import Route from './Routes';

import Sigin from '../pages/SignIn';
import Dashbaord from '../pages/Dashboard';
import NewCollaborators from '../pages/Collaborators/NewCollaborators';
import Collaborators from '../pages/Collaborators/List';
import CollaboratorDetail from '../pages/Collaborators/Detail';
import EditCollaborator from '../pages/Collaborators/EditCollaborator';
import NewProduct from '../pages/Products/NewProduct';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Sigin} />
    <Route path="/dashboard" exact component={Dashbaord} isPrivate />
    <Route path="/collaborators" exact component={Collaborators} isPrivate />
    <Route
      path="/collaborators/new"
      exact
      component={NewCollaborators}
      isPrivate
    />
    <Route
      path="/collaborators/:id"
      exact
      component={CollaboratorDetail}
      isPrivate
    />
    <Route
      path="/collaborators/edit/:id"
      exact
      component={EditCollaborator}
      isPrivate
    />
    <Route path="/produtos" exact component={NewProduct} isPrivate />
  </Switch>
);

export default Routes;
