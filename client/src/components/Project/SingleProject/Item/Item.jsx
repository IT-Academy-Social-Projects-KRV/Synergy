import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';
import alignLeft from '../../../../assets/images/MainPageImages/Dollar.png';

const Item = ({ id, typeFirstInput, typeSecondInput }) => {
  return (
    <div className={styles.Item}>
      <div className={styles.idNumber}>
        <p>#{id}</p>
      </div>

      <input
        type={typeFirstInput}
        className={styles.typeText}
        placeholder="Type title..."
      />

      <img src={alignLeft} alt="alignLeft" />

      <input
        type={typeSecondInput}
        className={styles.typeNumber}
        placeholder="Type number..."
      />

      <button>+</button>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  typeFirstInput: PropTypes.string,
  typeSecondInput: PropTypes.string,
};

Item.defaultProps = {
  typeFirstInput: '',
  typeSecondInput: '',
};

export default Item;
