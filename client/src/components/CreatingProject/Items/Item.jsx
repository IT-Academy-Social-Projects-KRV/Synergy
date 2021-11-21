import React from 'react';
import PropTypes from 'prop-types';
import styles from './Item.module.scss';
import Dollar from '../../../assets/images/MainPageImages/Dollar.png';

const Item = ({ id, typeFirstInput, typeSecondInput, typeTax }) => {
  return (
    <div className={styles.Item}>
      <div className={styles.typeTop}>
        <div className={styles.idNumber}>
          <p>#{id}</p>
        </div>
        <input
          type={typeFirstInput}
          className={styles.typeText}
          placeholder="Type title..."
        />
        <img src={Dollar} alt="first" />
        <input
          type={typeSecondInput}
          className={styles.typeNumber}
          placeholder="Type price..."
        />
        <button>+</button>
      </div>
      <div className={styles.typeBottom}>
        <textarea
          className={styles.textareaItem}
          placeholder="Description..."
        />
        <img src={Dollar} alt="second" />
        <input
          type={typeTax}
          className={styles.typeTax}
          placeholder="Type tax..."
        />
      </div>
    </div>
  );
};

Item.propTypes = {
  id: PropTypes.number.isRequired,
  typeFirstInput: PropTypes.string,
  typeSecondInput: PropTypes.string,
  typeTax: PropTypes.string,
};

export default Item;
