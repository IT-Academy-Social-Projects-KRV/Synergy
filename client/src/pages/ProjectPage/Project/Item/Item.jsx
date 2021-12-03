import React from 'react';
import Box from '@mui/material/Box';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import styles from './Item.module.scss';

const Item = () => {
  return (
    <Box className={styles.item}>
      <Box className={styles.item__textField}>
        <div className={styles.item__idBlock}>
          <p className={styles.itemId}>#1</p>
        </div>

        <input
          className={styles.item__titleTextField}
          placeholder='Type title...'
        />

        <input
          type='number'
          className={styles.item__priceTextField}
          placeholder='Type price...'
        />

        <div className={styles.item__submitMsg}>
          <div className={styles.iconWrapper}>
            <CheckCircleIcon />
          </div>
          <div className={styles.submitMsg}>Submited</div>
        </div>

        <div className={styles.item__errorMsg}>
          <div className={styles.iconWrapper}>
            <ErrorOutlineRoundedIcon />
          </div>
          <div className={styles.errorMsg}>Error</div>
        </div>
      </Box>

      <Box className={styles.item__desc}>
        <textarea
          className={styles.item__descText}
          placeholder='Type description...'
        />

        <input
          type='number'
          className={styles.item__priceTextField}
          placeholder='Type tax...'
        />
      </Box>
    </Box>
  );
};
export default Item;
