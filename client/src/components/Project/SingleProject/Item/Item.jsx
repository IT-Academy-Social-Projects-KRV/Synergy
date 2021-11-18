import React from "react"; 
import styles from './Item.module.scss'; 
import alignLeft from "../../../../assets/images/Dolar.jpg";
 
function Item (props) 
{ 
    return( 
        <div className={styles.Item}> 
            <div className={styles.idNumber}> 
                <p>#{props.id}</p> 
            </div> 
            <input type={props.typeFirstInput} className={styles.typeText} placeholder="Type title..."/> 
            <img src={alignLeft}/> 
            <input type={props.typeSecondInput} className={styles.typeNumber} placeholder="Type number..."/> 
            <button>+</button> 
        </div> 
    ); 
} 
export default Item;