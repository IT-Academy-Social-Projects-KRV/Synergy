import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// import routes from '../configs/routes';

const AuthRoute = ({ component: Component, ...rest }) => {
  const isAuthed = !!sessionStorage.getItem('token');
  console.log(isAuthed);
  return (
    <Route {...rest} render={(props) =>
      isAuthed ?
        <Component {...props} /> :
        <Redirect
          to={{
            pathname: '/',
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