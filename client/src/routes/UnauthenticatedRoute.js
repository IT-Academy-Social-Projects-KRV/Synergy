import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux';
import routes from '../configs/routes';


const UnauthenticatedRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(userSelector);

  return (
    <Route
      {...rest}
      render={props =>
        !user ? 
          <Component {...props} />
          :
          <Redirect to={routes.AuthRoutes.pathToProjectList} />
      }
    />
  );
};

export default UnauthenticatedRoute;