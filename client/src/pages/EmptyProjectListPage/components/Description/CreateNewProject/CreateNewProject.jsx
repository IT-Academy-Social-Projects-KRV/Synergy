import { Link } from '@mui/material';
import { useHistory } from 'react-router-dom';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './styles.js';
import routes from '../../../../../configs/routes.js';

const CreateNewProject = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push(routes.pathToCreatingProject);
  };

  return (
    <Link sx={styles.link} underline='always' onClick={handleClick}>
      Do you want create new?
      <OpenInNewIcon fontSize='small' />
    </Link>
  );
};

export default CreateNewProject;
