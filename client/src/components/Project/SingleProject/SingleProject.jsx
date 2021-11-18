import SingleProjectBill from './SingleProjectBill/SingleProjectBill';
import SingleProjectInfo from './SingleProjectInfo/SingleProjectInfo';
import SingleProjectDescription from './SingleProjectDescription/SingleProjectDescription';
import SingleProjectDiagram from './SingleProjectDiagram/SingleProjectDiagram';
import SingleProjectAddItems from './SingleProjectAddItems/SingleProjectAddItems';
import SingleProjectExistItems from './SingleProjectExistItems/SingleProjectExistItems';
import styles from './SingleProject.module.scss';

const SingleProject = () => {
    return (    
        <div>
            <main>
                <div className={styles.bg_project}>
                    <div className={styles.project_info}>
                        <h1>Progect Name</h1>
                        <div className={styles.bg_project_block}>
                            <div className={styles.project_block}>
                                <SingleProjectBill/>
                                <SingleProjectInfo /> 
                                <SingleProjectDescription/>                          
                            </div>
                            <div className={styles.project_diagram}>
                                <SingleProjectDiagram/>
                            </div>
                        </div>
                        <div>
                            <SingleProjectExistItems/>
                        </div>
                        <div>
                            <SingleProjectAddItems/>
                        </div>  
                    </div>
                </div>
             </main> 
        </div>
    )
}

export default SingleProject