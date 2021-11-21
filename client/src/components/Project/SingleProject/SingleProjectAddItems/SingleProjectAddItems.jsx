import Item from '../Item/index';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import Button from '@mui/material/Button';
import styles from './SingleProjectAddItems.module.scss';

const SingleProjectAddItems = () => {
  return (
    <section>
      <div className={styles.bg_add_items}>
        <div className={styles.head}>
          <h2>Add Items</h2>
        </div>
        <div className={styles.add_items}>
          <div className={styles.items_submition}>
            <Item />
            <div className={styles.items_submition_sign}>
              <p className={styles.icon_submited}>
                <CheckCircleIcon />
              </p>
              <p className={styles.submited}>Submited</p>
            </div>
          </div>
          <div className={styles.items_submition}>
            <Item />
            <div className={styles.items_submition_sign}>
              <p className={styles.icon_error}>
                <ErrorOutlineRoundedIcon />
              </p>
              <p className={styles.error}>Error</p>
            </div>
          </div>
        </div>
        <Button className={styles.btn} variant="contained">
          Save
        </Button>
      </div>
    </section>
  );
};

export default SingleProjectAddItems;
