import * as React from 'react'
import logo from './img/logo.png'
import { CardMedia } from '@mui/material'
import styles from './Logo.module.scss'

const Logo = () => {
  return(
    <CardMedia className={styles.img} component='img' src={logo} />
  )
}

export default Logo
