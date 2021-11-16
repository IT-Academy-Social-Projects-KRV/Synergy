import { Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
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

const { routes } = config;

export const Routes = () => {
    const isAuth = true;   //! if isAuth===true we will see SideBar,Footer else we will see login/register
    const user = {
        role: 'admin',
    }

    if (!isAuth) {
        return (
            <>
                <Redirect from='/' to={routes.pathToLogin} />
                <Switch>
                    <Route path={routes.pathToLogin} exact render={() => <Authorization />} />
                    <ProtectedRoute path={routes.pathToRegistration} component={Authorization} />
                </Switch>
            </>
        )
    }

    return (
        <>
            {
                user.role === 'admin'
                    ?
                    <>
                        <SideBar />
                        <Switch>
                            <Route path={routes.pathToCreatingProject} exact render={() => <CreatingProject />} />
                            <Route path={routes.pathToProjectList} exact render={() => <ProjectList />} />
                            <Route path={routes.pathToSettings} exact render={() => <Settings />} />
                            <Route path={routes.pathToDashboard} exact render={() => <Project />} />
                            <Route path={routes.pathToBillSettings} exact render={() => <BillSettings />} />
                            <Route path={routes.pathToAccount} exact render={() => <Account />} />
                        </Switch>
                        <Footer />
                    </>
                    : ''
            }

            {
                user.role === 'customer'
                    ?
                    <>
                        <SideBar />
                        <Switch>
                            <Route path={routes.pathToDashboard} exact render={() => <Project />} />
                            <Route path={routes.pathToSettings} exact render={() => <Settings />} />
                            <Route path={routes.pathToAccount} exact render={() => <Account />} />
                        </Switch>
                        <Footer />
                    </>
                    : ''
            }
        </>
    );
}