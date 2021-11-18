import CancelIcon from '@mui/icons-material/Cancel';
import styles from './SingleProjectExistItems.module.scss';

const SingleProjectExistItems = () => {
return (
    <section>
        <div className={styles.bg_exist_items}>
                <h2>Exist Items</h2>
            <div className={styles.exist_items_table}>
                    <table className={styles.table_items}>
                        <thead>
                            <tr>
                                <th><span>ID</span></th>
                                <th><span>Item name</span></th>
                                <th><span>Cost</span></th>
                                <th><span>Date added</span></th>
                                <th className="text-center"><span>Status</span></th>
                                <th><p className={styles.icon_error}></p></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><div className={styles.id_field}>#1</div></td>
                                <td><span>Cement</span></td>
                                <td><span>255</span></td>
                                <td><span>11.10.2021</span></td>
                                <td className={styles.subm}><span className={styles.submited}>Applied</span></td>
                                <td className={styles.cancel}>
                                    <a href="#">
                                        <span className={styles.icon_cancel}><CancelIcon/></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className={styles.odd}>
                                <td><div className={styles.id_field}>#2</div></td>
                                <td><span >Cement</span></td>
                                <td><span>255</span></td>
                                <td><span>11.10.2021</span></td>
                                <td className={styles.subm}><span className={styles.pending}>Pending</span></td>
                                <td className={styles.cancel}>
                                    <a href="#">
                                        <span className={styles.icon_cancel}><CancelIcon/></span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><div className={styles.id_field}>#3</div></td>
                                <td><span>Cement</span></td>
                                <td><span>255</span></td>
                                <td><span>11.10.2021</span></td>
                                <td className={styles.subm}><span className={styles.reject}>Reject</span></td>
                                <td className={styles.cancel}>
                                    <a href="#">
                                        <span className={styles.icon_cancel}><CancelIcon/></span>
                                    </a>
                                </td>
                            </tr>
                            <tr className={styles.odd}>
                                <td><div className={styles.id_field}>#4</div></td>
                                <td><span>Cement</span></td>
                                <td><span>255</span></td>
                                <td><span>11.10.2021</span></td>
                                <td className={styles.subm}><span className={styles.reject}>Reject</span></td>
                                <td className={styles.cancel}>
                                    <a href="#">
                                        <span className={styles.icon_cancel}><CancelIcon/></span>
                                    </a>
                                </td>
                            </tr>
                        </tbody>
                    </table>
            </div> 
        </div>  
    </section>
    )
}

export default SingleProjectExistItems;