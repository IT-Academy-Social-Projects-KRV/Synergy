import * as React from 'react'
import { Typography } from '@mui/material'

const Header = () => {
  return(
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: 32,
        color: '#21143E',
      }}>
      You not have any project.
    </Typography>
  )
}

export default Header