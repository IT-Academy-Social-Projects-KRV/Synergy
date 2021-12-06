import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import styles from './ProjectBill.module.scss';

const ProjectBill = () => {
  return (
    <section>
      <div className={styles.bill}>
        <div className={styles.bill__bg}>
          <h3 className={styles.bill__title}>Total Income</h3>

          <div className={styles.bill__income}>
            <p className={styles.icon}>
              <CreditCardRoundedIcon />
            </p>

            <div className={styles.money}>
              <p className={styles.icon__money}>
                <AttachMoneyRoundedIcon />
              </p>
              <p className={styles.price}>22.365</p>
            </div>
          </div>
        </div>

        <div className={styles.bill__bg}>
          <h3 className={styles.bill__title}>Total Outlay</h3>

          <div className={styles.bill__outlay}>
            <p className={styles.icon}>
              <CreditCardRoundedIcon />
            </p>

            <div className={styles.money}>
              <p className={styles.icon__money}>
                <AttachMoneyRoundedIcon />
              </p>
              <p className={styles.price}>15.365</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectBill;
