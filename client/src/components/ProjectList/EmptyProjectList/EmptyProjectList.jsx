import * as React from 'react'
import AdvancedLogo from './AdvancedLogo'
import Description from './Description'
import { Box } from '@mui/material'

const EmptyProjectList = () => {
  return(
    <Box sx={{
      height: 230,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      textAlign: 'center',
    }}>
      <AdvancedLogo />
      <Description />
    </Box>
  )
}

export default EmptyProjectList