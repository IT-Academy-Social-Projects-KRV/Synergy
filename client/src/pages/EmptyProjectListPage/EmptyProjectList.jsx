import AdvancedLogo from './components/AdvancedLogo';
import Description from './components/Description';
import { Box } from '@mui/material';
import styles from './styles';

const EmptyProjectList = () => {
  return (
    <Box sx={styles.box}>
      <AdvancedLogo />
      <Description />
    </Box>
  );
};

export default EmptyProjectList;
