import styles from './SingleProjectInfo.module.scss';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';

const SingleProjectInfo =()=>{
    return(
        <section>
            <div className={styles.client_info}>
                <div className={styles.client_icon}>
                    <p><AccountCircleRoundedIcon/></p>
                    <h4>Client name</h4>
                </div>
                <p>Order date: 28.11.2021</p>
                <p>Release date: 15.03.2022</p>
            </div> 
        </section>
    )
}

export default SingleProjectInfo
