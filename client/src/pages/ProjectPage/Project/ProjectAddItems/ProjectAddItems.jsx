import { Item } from '../Item';
import Box from '@mui/material/Box';
import styles from './ProjectAddItems.module.scss';

const ProjectAddItems = ({ handleSubmit }) => {

  return (
    <section>
      <Box className={styles.addItems}>
        <div>
          <h2 className={styles.addItems__title}>Add Items</h2>
        </div>

        <Box className={styles.addItems__block}>
          <div className={styles.addItems__blockInput}>
            <Item refreshList={handleSubmit} />
          </div>
        </Box>
      </Box>
    </section>
  );
};

export default ProjectAddItems;
