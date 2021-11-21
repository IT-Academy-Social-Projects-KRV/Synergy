import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import Login from '../../components/Authorization/Login/Login';
import Registration from '../../components/Authorization/Registration/Registration';

const Authorization = () => {
  const location = useLocation();
  const [pathName, setPathName] = useState(location.pathname);

  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  return (
    <div>
      Authorization
      {pathName === '/login' ? <Login /> : ''}
      {pathName === '/registration' ? <Registration /> : ''}
    </div>
  );
};

export default Authorization;