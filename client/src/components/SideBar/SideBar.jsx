import { NavLink } from 'react-router-dom';
import { config } from '../../configs';

const { routes } = config;

const SideBar = (props) => {
    const role = 'admin';

    return (
        <div>
            SideBar
            <ul>
                {
                    role === 'admin'
                        ?
                        <>
                            <li>
                                <NavLink to={routes.pathToDashboard}>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.pathToProjectList}>Projects</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.pathToCreatingProject}>Creating project</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.pathToSettings}>Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.pathToBillSettings}>Bill settings</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.pathToAccount}>Account</NavLink>
                            </li>
                        </>
                        : ''
                }

                {
                    role === 'customer'
                        ?
                        <>
                            <li>
                                <NavLink to={routes.pathToDashboard}>Dashboard</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.pathToSettings}>Settings</NavLink>
                            </li>
                            <li>
                                <NavLink to={routes.pathToAccount}>Account</NavLink>
                            </li>
                        </>
                        : ''
                }
            </ul>
        </div>
    )
}

export default SideBar