import React, { useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import Header from '../components/Header/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar/SideBar';
import { useSelector } from 'react-redux';
import { userSelector } from '../redux';
import routes from '../configs/routes';

const AuthRoute = ({ component: Component, ...rest }) => {
  const [sideClass, setSideClass] = useState('');

  const user = useSelector(userSelector);

  const changeClass = () =>
    sideClass === 'moved' ? setSideClass('') : setSideClass('moved');

  return (
    <Route
      {...rest}
      render={(props) =>
        !user ?
          <Redirect to={routes.NonAuthRoutes.pathToLogin} />
          :
          <>
            <section className={'top'}>
              <Header sideClass={sideClass} changeClass={changeClass} />
              <section className={'main__wrapper'}>
                <SideBar sideClass={sideClass} />
                <section className={`main_content_container ${sideClass}`}>
                  <Component {...props} />
                </section>
              </section> 
            </section>
            <Footer />
          </>
      }
    />
  );
};

export default AuthRoute;