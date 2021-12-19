import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import styles from './ProjectInfo.module.scss';

const ProjectInfo = ({ firstName, lastName, orderDate, releaseDate }) => {
  return (
    <section>
      <div className={styles.client}>
        <div className={styles.client__icon}>
          <div>
            <AccountCircleRoundedIcon />
          </div>

          <h4 className={styles.client__name}>{firstName} {lastName}</h4>
        </div>

        <p data-testid='orderDate' className={styles.client__date}>Order date: {orderDate}</p>
        <p data-testid='releaseDate' className={styles.client__date}>Release date: {releaseDate}</p>
      </div>
    </section>
  );
};

export default ProjectInfo;
