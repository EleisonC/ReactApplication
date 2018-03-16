import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// function for private urls which cant be accessed before login
const SecureRoute = ({ component: Values, Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (
      window.localStorage.getItem('accessToken') ?
        (<Values {...props} />) :
        (<Redirect to={{ pathname: '/login' }} />
        ))}
  />
);
export default SecureRoute;