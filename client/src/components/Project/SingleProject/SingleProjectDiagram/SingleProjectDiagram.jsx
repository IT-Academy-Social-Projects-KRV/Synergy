import diagram from '../../../../assets/images/diagram.png'
import styles from './SingleProjectDiagram.module.scss';

const SingleProjectDiagram = () => {
    return (
        <section>
            <div className={styles.diagram}>
                <h3>Analytics</h3>
                <img alt="" src={diagram}></img>
            </div>
        </section>
    )
}

export default SingleProjectDiagram