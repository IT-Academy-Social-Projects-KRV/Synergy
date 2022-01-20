import { Switch, Route } from 'react-router-dom';
import routes from '../configs/routes';
import ProjectList from '../pages/ProjectListPage';
import ProjectPage from '../pages/ProjectPage/Project';
import CreatingProject from '../pages/CreatingProjectPage';
import AuthRoute from './AuthRoute';
import UnauthenticatedRoute from './UnauthenticatedRoute';
import './routes.scss';
import Settings from '../pages/SettingsPage/components/AdminSettingsPage/AdminSettings';
import ItemPage from '../pages/ProjectPage/Project/ItemPage/ItemPage';
import BillSettings from '../components/BillSettings';
import AccountPage from '../pages/AccountPage';
import Login from '../pages/AuthorizationPage/components/Login/Login';
import UpdatePassword from '../pages/ResetPasswordPage/ResetPassword';
import ForgotPassword from '../pages/ForgotPasswordPage/ForgotPassword';
import Registration from '../pages/AuthorizationPage/components/Registration/Registration';
import CustomersListPage from '../pages/CustomersListPage/components/CustomersListPage';


const Routes = () => {
  return (
    <Switch>
      <UnauthenticatedRoute
        exact
        path={routes.NonAuthRoutes.pathToLogin}
        component={Login}
      />
      <UnauthenticatedRoute
        exact
        path={routes.NonAuthRoutes.pathToRegistration}
        component={Registration}
      />
      <UnauthenticatedRoute
        exact
        path={routes.NonAuthRoutes.pathToReset}
        component={UpdatePassword}
      />
      <UnauthenticatedRoute
        exact
        path={routes.NonAuthRoutes.pathToForgotPassword}
        component={ForgotPassword}
      />
      <AuthRoute
        exact
        path={`${routes.AuthRoutes.pathToProject}/:id`}
        component={ProjectPage}
      />
      <AuthRoute
        exact
        path={routes.AuthRoutes.pathToCustomers}
        component={CustomersListPage}
      />
      <AuthRoute
        path={routes.AuthRoutes.pathToCreatingProject}
        exact
        component={CreatingProject}
      />
      <AuthRoute
        path={routes.AuthRoutes.pathToProjectList}
        exact
        component={ProjectList}
      />
      <AuthRoute
        path={routes.AuthRoutes.pathToSettings}
        exact
        component={Settings}
      />
      <AuthRoute
        path={routes.AuthRoutes.pathToBillSettings}
        exact
        component={BillSettings}
      />
      <AuthRoute
        path={routes.AuthRoutes.pathToAccount}
        exact
        component={AccountPage}
      />
      <AuthRoute
        path={`${routes.AuthRoutes.pathToItemPage}/:id`}
        exact
        component={ItemPage}
      />
      <Route path='/*' render={() => 'Not Found'}/>
    </Switch>
  );
};

export default Routes;