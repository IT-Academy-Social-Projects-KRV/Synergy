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


export const Routes = () => {
    const isAuth = true;   //! if isAuth===true we will see SideBar,Footer else we will see login/register
    const user = {
        role: 'admin',
    }

    if (!isAuth) {
        return (
            <>
                <Redirect from='/' to='/login' />
                <Switch>
                    <Route path='/login' exact render={() => <Authorization />} />
                    <ProtectedRoute path='/registration' component={Authorization} />
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
                            <Route path='/creating-project' exact render={() => <CreatingProject />} />
                            <Route path='/project-list' exact render={() => <ProjectList />} />
                            <Route path='/settings' exact render={() => <Settings />} />
                            <Route path='/dashboard' exact render={() => <Project />} />
                            <Route path='/bill-settings' exact render={() => <BillSettings />} />
                            <Route path='/account' exact render={() => <Account />} />
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
                            <Route path='/dashboard' exact render={() => <Project />} />
                            <Route path='/settings' exact render={() => <Settings />} />
                            <Route path='/account' exact render={() => <Account />} />
                        </Switch>
                        <Footer />
                    </>
                    : ''
            }
        </>
    );
}