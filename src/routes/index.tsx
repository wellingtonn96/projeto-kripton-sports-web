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
import ListProducts from '../pages/Products/ListProducts';
import DetailProduct from '../pages/Products/Detail';
import EditProduct from '../pages/Products/EditProduct';

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
    <Route path="/produtos/new" exact component={NewProduct} isPrivate />
    <Route path="/produtos" exact component={ListProducts} isPrivate />
    <Route path="/produto/:id" exact component={DetailProduct} isPrivate />
    <Route path="/produto/edit/:id" exact component={EditProduct} isPrivate />
  </Switch>
);

export default Routes;
