import styles from './styles.module.scss';
import notFoundImg from '../../assets/images/NotFound/not-fount.png';
import { Link } from 'react-router-dom';
import routes from '../../configs/routes';

const NotFound = () => {
  const { pathToLogin } = routes.NonAuthRoutes;

  return (
    <div className={styles.notFound}>
      <div className={styles.notFoundContent}>
        <img
          className={styles.notFoundContent__img}
          src={notFoundImg}
          alt={notFoundImg}
        />
        <div>
          <Link className={styles.notFoundContent__link} to={pathToLogin}>
            Back to Projects &#9658;
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
