import AdvancedLogo from './AdvancedLogo';
import Description from './Description';
import { Box } from '@mui/material';
import styles from './styles';

const EmptyProjectList = () => {
  return (
    <Box className={styles.box}>
      <AdvancedLogo />
      <Description />
    </Box>
  );
};

export default EmptyProjectList;
