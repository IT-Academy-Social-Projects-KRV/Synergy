import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Account from '../components/Account';
import Authorization from '../pages/AuthorizationPage';
import CreatingProject from '../pages/CreatingProjectPage';
import ProjectList from '../pages/ProjectListPage';
import Settings from '../components/Settings';
import { Dashboard } from '../pages/ProjectPage';
import BillSettings from '../components/BillSettings';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ProtectedRoute from '../components/ProtectedRoute';
import { config } from '../configs';
import Header from '../components/Header/Header';
import './routes.scss';
import AlertWindow from '../components/Alert/AlertWindow';
import { useSelector } from 'react-redux';
import { isExistUserSelector, userSelector } from '../redux';
import userRole from '../consts/userRoles';

const { routes } = config;

export const Routes = () => {
  const [sideClass, setSideClass] = useState('');
 
  const isExistUser = useSelector(isExistUserSelector); 
  const user = useSelector(userSelector);
  const changeClass = () =>
    sideClass === 'moved' ? setSideClass('') : setSideClass('moved');

  if (!isExistUser) {
    return (
      <>
        <Redirect from='/'  to={routes.pathToLogin} />
        <Switch>
          <Route
            path={routes.pathToLogin}
            exact
            render={() => <Authorization />}
          />
          <ProtectedRoute
            path={routes.pathToRegistration}
            component={Authorization}
          />
        </Switch>
      </>
    );
  }
  
  return (
    <>
      <Header sideClass={sideClass} changeClass={changeClass} />
      {user.roleId === userRole.AdminRole ? (
        <>
          <Redirect from='/login'  to={routes.pathToDashboard} />
          <section className={'main__wrapper'}>
            <SideBar sideClass={sideClass} />
            <section className={'main_content_container' + ' ' + sideClass}>
              <AlertWindow/>
              <Switch>
                <Route
                  path={routes.pathToCreatingProject}
                  exact
                  render={() => <CreatingProject />}
                />
                <Route
                  path={routes.pathToProjectList}
                  exact
                  render={() => <ProjectList />}
                />
                <Route
                  path={routes.pathToSettings}
                  exact
                  render={() => <Settings />}
                />
                <Route
                  path={routes.pathToDashboard}
                  exact
                  render={() => <Dashboard />}
                />
                <Route
                  path={routes.pathToBillSettings}
                  exact
                  render={() => <BillSettings />}
                />
                <Route
                  path={routes.pathToAccount}
                  exact
                  render={() => <Account />}
                />
              </Switch>
            </section>
          </section>
        </>
      ) : (
        ''
      )}

      {user.roleId === userRole.UserRole ? (
        <>
          <Redirect from='/login' to={routes.pathToDashboard} />
          <section className={'main__wrapper'}>
            <SideBar />
            <section className={'main_content_container' + sideClass}>
              <Switch>
                <Route
                  path={routes.pathToDashboard}
                  exact
                  render={() => <Dashboard />}
                />
                <Route
                  path={routes.pathToSettings}
                  exact
                  render={() => <Settings />}
                />
                <Route
                  path={routes.pathToAccount}
                  exact
                  render={() => <Account />}
                />
              </Switch>
            </section>
          </section>
        </>
      ) : (
        ''
      )}
      <Footer />
    </>
  );
};
