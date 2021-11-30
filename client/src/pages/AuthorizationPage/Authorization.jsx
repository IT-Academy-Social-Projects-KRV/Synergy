import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Login from '../AuthorizationPage/components/Login';
import Registration from '../AuthorizationPage/components/Registration';

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
