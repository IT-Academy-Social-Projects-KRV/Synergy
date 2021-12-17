import { Switch, Route } from 'react-router-dom';
import routes from '../configs/routes';
import Authorization from '../pages/AuthorizationPage/Authorization';
//import Login from '../pages/AuthorizationPage/components/Login';
import ProjectList from '../pages/ProjectListPage';
import Dashboard from '../pages/ProjectPage/Dashboard';
import CreatingProject from '../pages/CreatingProjectPage';
import AuthRoute from './AuthRoute';
import Header from '../pages/EmptyProjectListPage/components/Description/Header';
import SideBar from '../components/SideBar';

const Routes = () => {
  //const [sideClass, setSideClass] = useState('');
  return (
    <>
      <Header/>
      <section className={'main__wrapper'}>
        <SideBar  />
        <section className={'main_content_container' + ' ' }>
          <Switch>
            <Route
              exact
              path={routes.NonAuthRoutes.pathToLogin}
              component={Authorization}
            />
            <AuthRoute
              exact
              path={routes.AuthRoutes.pathToDashboard}
              component={Dashboard}
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
          </Switch>
        </section>
      </section>
    </>
  );
};

export default Routes;