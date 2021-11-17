import * as React from 'react'
import logo from './img/logo.png'
import { CardMedia } from '@mui/material'

const Logo = () => {
  return(
    <CardMedia component='img' src={logo} sx={{width: '100%', maxWidth: 75}} />
  )
}

export default Logo
