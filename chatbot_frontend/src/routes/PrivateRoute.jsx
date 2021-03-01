import React from 'react';
import { useSelector } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const { accessToken, isAdmin } = useSelector((state) => state.auth);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (accessToken) {
          if (isAdmin && ['/bots'].includes(props.location.pathname)) {
            return <Redirect to="/admins/accounts" />;
          }
          return <Component {...props} accessToken={accessToken} />;
        }
        return <Redirect to="/login" />;
      }}
    />
  );
}

export default PrivateRoute;
