import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import styles from './SingleProjectInfo.module.scss';

const ProjectInfo = () => {
  return (
    <section>
      <div className={styles.client}>
        <div className={styles.client__icon}>
          <div>
            <AccountCircleRoundedIcon />
          </div>

          <h4 className={styles.client__name}>Client name</h4>
        </div>

        <p className={styles.client__date}>Order date: 28.11.2021</p>
        <p className={styles.client__date}>Release date: 15.03.2022</p>
      </div>
    </section>
  );
};

export default ProjectInfo;
