import { Link } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import styles from './styles.js';

const CreateNewProject = () => {
  return (
    <Link sx={styles.link} href='#' underline='always'>
      Do you want create new?
      <OpenInNewIcon fontSize='small' />
    </Link>
  );
};

export default CreateNewProject;
