import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import routes from '../configs/routes';
import { isAuthedSelector } from '../redux';

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthed = useSelector(isAuthedSelector);
 
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthed ?
          <Component {...props} /> :
          <Redirect
            to={{
              pathname: routes.NonAuthRoutes.pathToLogin,
              state: {
                from: props.location
              }
            }}
          />
      }
    />
  );
};

export default AuthRoute;