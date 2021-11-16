import { Link } from 'react-router-dom';


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
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                            <li>
                                <Link to='/project-list'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/creating-project'>Creating project</Link>
                            </li>
                            <li>
                                <Link to='/settings'>Settings</Link>
                            </li>
                            <li>
                                <Link to='/bill-settings'>Bill settings</Link>
                            </li>
                            <li>
                                <Link to='/account'>Account</Link>
                            </li>
                        </>
                        : ''
                }
                
                {
                    role === 'customer'
                        ?
                        <>
                            <li>
                                <Link to='/dashboard'>Dashboard</Link>
                            </li>
                            <li>
                                <Link to='/settings'>Settings</Link>
                            </li>
                            <li>
                                <Link to='/account'>Account</Link>
                            </li>
                        </>
                        : ''
                }
            </ul>
        </div>
    )
}

export default SideBar