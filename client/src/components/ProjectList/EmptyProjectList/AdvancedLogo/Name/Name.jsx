import * as React from 'react'
import { Typography } from '@mui/material'

const Name = () => {
  return(
    <Typography 
      sx={{
        fontWeight: 500,
        fontSize: 20,
        color: '#4E48A0',
      }} 
      component='span'
    >Synergy</Typography>
  )
}

export default Name