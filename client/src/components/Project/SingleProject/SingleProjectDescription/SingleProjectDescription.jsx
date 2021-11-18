import styles from './SingleProjectDescription.module.scss';

const SingleProjectDescription =()=>{
    return(
        <section>
            <div className={styles.description}>
                <h3>Description</h3>
                <p>CRM stands for “Customer Relationship Management”. In most cases, when people talk about CRM, they are usually referring to a CRM system, a tool aimed at helping companies with sales, marketing and service management. CRM software allows businesses to focus on their company’s relationships with customers, colleagues, suppliers, etc. With a professional CRM in place, it becomes much easier to find new customers, win their trust, provide qualified support, and provide additional services throughout the relationship.</p>
            </div>  
        </section>
    )
}

export default SingleProjectDescription