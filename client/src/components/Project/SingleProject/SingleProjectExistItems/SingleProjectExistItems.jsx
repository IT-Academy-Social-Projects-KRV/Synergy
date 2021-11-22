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
                                <th>ID</th>
                                <th>Item name</th>
                                <th>Cost</th>
                                <th>Date added</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr>
                                <td><div className={styles.id_field}>#1</div></td>
                                <td>Cement</td>
                                <td>255</td>
                                <td>11.10.2021</td>
                                <td>Applied</td>
                                <td className={styles.cancel}>
                                    <a href="/dashboard" alt="Cancel Icon">
                                        <span className={styles.icon_cancel}><CancelIcon /></span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><div className={styles.id_field}>#2</div></td>
                                <td>Cement</td>
                                <td>255</td>
                                <td>11.10.2021</td>
                                <td>Pending</td>
                                <td className={styles.cancel}>
                                    <a href="/dashboard" alt="Cancel Icon">
                                        <span className={styles.icon_cancel}><CancelIcon /></span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><div className={styles.id_field}>#3</div></td>
                                <td>Cement</td>
                                <td>255</td>
                                <td>11.10.2021</td>
                                <td>Reject</td>
                                <td className={styles.cancel}>
                                    <a href="/dashboard" alt="Cancel Icon">
                                        <span className={styles.icon_cancel}><CancelIcon /></span>
                                    </a>
                                </td>
                            </tr>
                            <tr>
                                <td><div className={styles.id_field}>#4</div></td>
                                <td>Cement</td>
                                <td>255</td>
                                <td>11.10.2021</td>
                                <td>Reject</td>
                                <td className={styles.cancel}>
                                    <a href="/dashboard" alt="Cancel Icon">
                                        <span className={styles.icon_cancel}><CancelIcon /></span>
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