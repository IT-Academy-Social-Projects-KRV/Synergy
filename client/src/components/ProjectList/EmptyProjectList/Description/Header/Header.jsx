import * as React from 'react'
import { Typography } from '@mui/material'
import styles from './Header.module.scss'

const Header = () => {
  return(
    <Typography className={styles.text}>
      You not have any project.
    </Typography>
  )
}

export default Header