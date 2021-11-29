import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Account from '../components/Account';
import Authorization from '../components/Authorization';
import CreatingProject from '../components/CreatingProject';
import ProjectList from '../components/ProjectList';
import Settings from '../components/Settings';
import Project from '../components/Project';
import BillSettings from '../components/BillSettings';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';
import ProtectedRoute from '../components/ProtectedRoute';
import { config } from '../configs';
import Header from '../components/Header/Header';
import './routes.scss';
import AlertWindow from '../components/Alert/AlertWindow';

const { routes } = config;

export const Routes = () => {
  const [sideClass, setSideClass] = useState('');
  const isAuth = true; //! if isAuth===true we will see SideBar,Footer else we will see login/register
  const user = {
    role: 'admin',
  };

  const changeClass = () =>
    sideClass === 'moved' ? setSideClass('') : setSideClass('moved');

  if (!isAuth) {
    return (
      <>
        <Redirect from='/' to={routes.pathToLogin} />
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
      {user.role === 'admin' ? (
        <>
          <main>
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
                  render={() => <Project />}
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
          </main>
        </>
      ) : (
        ''
      )}

      {user.role === 'customer' ? (
        <>
          <main>
            <SideBar />
            <section className={'main_content_container' + sideClass}>
              <Switch>
                <Route
                  path={routes.pathToDashboard}
                  exact
                  render={() => <Project />}
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
          </main>
        </>
      ) : (
        ''
      )}
      <Footer />
    </>
  );
};
