import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import CreditCardRoundedIcon from '@mui/icons-material/CreditCardRounded';
import styles from './SingleProjectBill.module.scss';

const SingleProjectBill = () => {
  return (
    <section>
      <div className={styles.total}>
        <div className={styles.bg_total}>
          <h3>Total Income</h3>
          <div className={styles.total_income}>
            <p className={styles.icon}>
              <CreditCardRoundedIcon />
            </p>
            <div className={styles.money}>
              <p className={styles.icon_money}>
                <AttachMoneyRoundedIcon />
              </p>
              <p className={styles.price}>22.365</p>
            </div>
          </div>
        </div>
        <div className={styles.bg_total}>
          <h3>Total Outlay</h3>
          <div className={styles.total_outlay}>
            <p className={styles.icon}>
              <CreditCardRoundedIcon />
            </p>
            <div className={styles.money}>
              <p className={styles.icon_money}>
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

export default SingleProjectBill;
