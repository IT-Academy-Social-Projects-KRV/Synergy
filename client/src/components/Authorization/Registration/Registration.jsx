import { Link } from 'react-router-dom';
import routes from '../../../configs/routes';

const Registration = () => {
    const { pathToLogin } = routes;

    return (
        <div>
            Registration  under construction
            <Link to={pathToLogin}>to Login</Link>
        </div>
    );
};

export default Registration;