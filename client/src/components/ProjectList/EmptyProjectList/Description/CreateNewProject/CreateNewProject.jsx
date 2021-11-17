import * as React from 'react'
import {Link} from '@mui/material' 
import OpenInNewIcon from '@mui/icons-material/OpenInNew';

const CreateNewProject = () => {
  return(
    <Link sx={{
      fontWeight: 700,
      fontSize: 22,
      color: '#7872D6',
    }} color='inherit' href="#" underline="always">Do you want create new?<OpenInNewIcon fontSize="small" /></Link>
  )
}

export default CreateNewProject