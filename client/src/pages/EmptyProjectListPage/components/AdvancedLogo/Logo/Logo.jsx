import * as React from 'react';
import logo from '../../../../../assets/images/Logo/logo.png';
import { CardMedia } from '@mui/material';
import styles from './styles.js';

const Logo = () => {
  return <CardMedia sx={styles.img} component='img' src={logo} />;
};

export default Logo;
