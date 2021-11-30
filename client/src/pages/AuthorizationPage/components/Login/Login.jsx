import { Link } from 'react-router-dom';
import routes from '../../../../configs/routes';

const Login = () => {
  const { pathToRegistration } = routes;

  return (
    <div>
      Login under construction
      <Link to={pathToRegistration}>to Registration</Link>
    </div>
  );
};

export default Login;
