import { Link } from '@mui/material'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import styles from './CreateNewProject.module.scss'

const CreateNewProject = () => {
  return (
    <Link
      className={styles.link}
      color='inherit'
      href="#"
      underline="always"
    >Do you want create new?<OpenInNewIcon fontSize="small" /></Link>
  )
}

export default CreateNewProject