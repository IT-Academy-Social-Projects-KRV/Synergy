import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { userSelector } from '../../redux';
import { Primary } from '../../shared/Buttons';
import { getProjectForAccount } from '../../services/projects.service';
import { FormControl, Select, MenuItem } from '@mui/material';
import style from './BillSettings.module.scss';
import { getPdfSettings } from '../../services/billSettings.service';

const styles = {
  selectBox: {
    marginRight: '35px'
  },
  select: {
    height: '35px',
    fontSize: '14px',
    fontWeight: '500',
    border: '2px solid #D6D3FF',
    borderRadius: '10px',
    padding: '10px 5px',
  }
};

const BillSettings = () => {
  const user = useSelector(userSelector);
  const [projects, setProjects] = useState([]);
  const [activeProjectId, setActiveProject] = useState(0);

  const selectProject = (e) => {
    setActiveProject(e.target.value);
  };

  const fetchProjects = async () => {
    const { data } = await getProjectForAccount({ userId: user.id });
    try {
      setProjects(data.projects);
      setActiveProject(data.projects[0].id);
    } catch (e) {
      console.error(e);
    } 
  };

  const generatePdf = async () => {
    const response = await getPdfSettings(activeProjectId);
    
    const file = new Blob([response.data], { type: 'application/pdf' });
    const fileURL = URL.createObjectURL(file);
    window.open(fileURL);
  };

  useEffect(async () => {
    await fetchProjects();
  }, []);

  return (
    <div data-testid='billBlock' className={style.container}>
      <div className={style.default}>
        <span>Choose your project for generate report of bill in docx format.</span>
      </div>
      {projects.length != 0 && 
        <div className={style.selectProject}>
          <FormControl 
            sx={styles.selectBox}
          >
            <Select
              sx={styles.select}
              autoWidth
              value={activeProjectId}
              onChange={selectProject}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {projects.map(project => (
                <MenuItem key={project.id} value={project.id}>{project.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
          <Primary value='Generate' clickHandler={generatePdf} />
        </div>
      }
      
    </div>
  );
};

export default BillSettings;
