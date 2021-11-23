import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const token = 'Rockwell - Somebody`s Watching Me';

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        token !== null ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: {
                from: props.location,
              },
            }}
          />
        )
      }
    />
  );
};

export default ProtectedRoute;
