import React from 'react';
import PropTypes from 'prop-types';
import { Redirect, Route } from 'react-router-dom';

const token = 'Rockwell - Somebody`s Watching Me';

function ProtectedRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render = { props =>
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
}

ProtectedRoute.propTypes = {
  component: PropTypes.func.isRequired,
  location: PropTypes.string.isRequired,
};

export default ProtectedRoute;
