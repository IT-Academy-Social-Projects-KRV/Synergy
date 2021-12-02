import { useEffect, useState  } from 'react'; 
import { useLocation } from 'react-router-dom';
import Login from '../../components/Authorization/Login/Login';
import Registration from '../../components/Authorization/Registration/Registration';
import styles from '../Authorization/Authorization.module.scss';
import CLogo from '../../assets/images/MainPageImages/C.png';

const Authorization = () => {

  const location = useLocation();

  const [pathName, setPathName] = useState(location.pathname);
  
  useEffect(() => {
    setPathName(location.pathname);
  }, [location]);

  return(
    <div className={styles.authorization}>
      <div className={styles.authorization__title}>
        <h1>Synergy</h1>
        <p>Welcome to your project manager</p>
      </div>
      {pathName === '/login' && <Login/>}
      {pathName === '/registration' && <Registration/>} 
      <div className={styles.authorization__bottomCText}>
        <img src={CLogo} alt='Copyright sign'/>
        <span>SYNERGY, 2021. ALL RIGHTS RESERVED</span>
      </div>
    </div>
  );
};

export default Authorization;
