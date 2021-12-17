import { Switch, Route, useLocation, useHistory } from 'react-router-dom';
import routes from '../configs/routes';
import ProjectList from '../pages/ProjectListPage';
import Dashboard from '../pages/ProjectPage/Dashboard';
import CreatingProject from '../pages/CreatingProjectPage';
import AuthRoute from './AuthRoute';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import './routes.scss';
import { useState } from 'react';
import Settings from '../components/Settings';
import ItemPage from '../pages/ProjectPage/Project/ItemPage/ItemPage';
import BillSettings from '../components/BillSettings';
import Account from '../components/Account';
import Footer from '../components/Footer';
import Login from '../pages/AuthorizationPage/components/Login/Login';
import Registration from '../pages/AuthorizationPage/components/Registration/Registration';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { isAuthedSelector } from '../redux';

const Routes = () => {
  const isAuthed = useSelector(isAuthedSelector);
  const [sideClass, setSideClass] = useState('');
 
  const changeClass = () =>
    sideClass === 'moved' ? setSideClass('') : setSideClass('moved');

  const location = useLocation();
  const history = useHistory();

  useEffect(() => {
    if (location.pathname !== history.location.pathname) {
      history.push(location.pathname);
    }
  }, [location, isAuthed]);

  if (!isAuthed) {
    return (
      <>
        <Switch>
          <Route
            exact
            path={routes.NonAuthRoutes.pathToLogin}
            component={Login}
          />
          <Route
            exact
            path={routes.NonAuthRoutes.pathToRegistration}
            component={Registration}
          />
        </Switch>
      </>
    );
  }

  return (
    <>
      <Header sideClass={sideClass} changeClass={changeClass} />
      <>
        <section className={'main__wrapper'}>
          <SideBar sideClass={sideClass} />
          <section className={'main_content_container' + ' ' + sideClass}>
            <Switch>
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
                component={Account}
              />
              <AuthRoute
                path={routes.AuthRoutes.pathToItemPage}
                exact
                component={ItemPage}
              />
            </Switch>
          </section>
        </section>
      </>
      <Footer />
    </>
  );
};

export default Routes;