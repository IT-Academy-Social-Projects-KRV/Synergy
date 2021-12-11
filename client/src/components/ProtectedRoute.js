import React from 'react';
import { useSelector } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import { userSelector } from '../redux';



const ProtectedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(userSelector);
  return (
    <Route
      {...rest}
      render={(props) =>
        !user 
          ? (
            <Component {...props} />
          )
          : (
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
