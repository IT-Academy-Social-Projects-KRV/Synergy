import { Item } from '../Item';
import { Link } from 'react-router-dom';
import routes from '../../../../configs/routes';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import styles from './ProjectAddItems.module.scss';

const ProjectAddItems = () => {
  const style = {
    btnSubmit: {
      backgroundColor: '#7771d4',
      marginLeft: '20px',
      height: '35px',
      width: '180px',
      borderRadius: '10px',
      marginTop: '20px',
      letterSpacing: '2px',
      '&:hover': {
        backgroundColor: '#645fb5',
      },
    },

    boxBtn: {
      display: 'flex',
      marginLeft: '45px',
    },
  };

  return (
    <section>
      <Box className={styles.addItems}>
        <form action='#' method='POST'>
          <div>
            <h2 className={styles.addItems__title}>Add Items</h2>
          </div>

          <Box className={styles.addItems__block}>
            <div className={styles.addItems__blockInput}>
              <Item />
            </div>
          </Box>

          <Box sx={style.boxBtn}>
            <Link to={routes.AuthRoutes.pathToItemPage}>
              <Button sx={style.btnSubmit} variant='contained'>
                Add item
              </Button>
            </Link>

            <Button sx={style.btnSubmit} variant='contained' type='submit'>
              Save
            </Button>
          </Box>
        </form>
      </Box>
    </section>
  );
};

export default ProjectAddItems;
