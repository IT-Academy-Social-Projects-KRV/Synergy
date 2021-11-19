import React from 'react';
import styles from './Item.module.scss';
import Dollar from '../../../assets/images/MainPageImages/Dollar.png';

const Item = (props) =>{
    return(
        <div className={styles.Item}>
            <div className={styles.typeTop}>
                <div className={styles.idNumber}>
                    <p>#{props.id}</p>
                </div>
                <input type={props.typeFirstInput} className={styles.typeText} placeholder='Type title...'/>
                <img src={Dollar} alt='first'/>
                <input type={props.typeSecondInput} className={styles.typeNumber} placeholder='Type price...'/>
                <button>+</button>
            </div>
            <div className={styles.typeBottom}>
                <textarea className={styles.textareaItem} placeholder='Description...'/>
                <img src={Dollar} alt='second'/>
                <input type={props.typeTax} className={styles.typeTax} placeholder='Type tax...'/>
            </div>
        </div>
    );
}

export default Item;