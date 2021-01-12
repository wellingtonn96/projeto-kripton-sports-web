import React from 'react';
import {
  RouteProps as ReactDomRouteProps,
  Route as ReactDomRoute,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/Auth';
import DefaultLayout from '../pages/_layouts/default';
import Auth from '../pages/SignIn';

interface RouteProps extends ReactDomRouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}

const Router: React.FC<RouteProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { user } = useAuth();

  const Layout = user ? DefaultLayout : Auth;

  return (
    <ReactDomRoute
      {...rest}
      render={({ location }) => {
        return isPrivate === !!user ? (
          <Layout>
            <Component />
          </Layout>
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/dashboard',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

export default Router;
