import { useEffect, useState } from 'react';
import style from '../AccountPageProjects/AccountPageProjects.module.scss';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { userSelector } from '../../../../redux';
import TableCell from '@mui/material/TableCell';
import Table from '@mui/material/Table';
import TableContainer from '@mui/material/TableContainer';
import TableBody from '@mui/material/TableBody';
import { useDispatch } from 'react-redux';
import { styleAccount, headCells } from '../../../../consts/accountPageProject';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import routes from '../../../../configs/routes';
import { Link } from 'react-router-dom';
import { fetchProjectForAccount } from '../../../../redux';
import { Button } from '@mui/material';
import { useSelector } from 'react-redux';

const AccountPageProjects = () => {

  const dispatch = useDispatch();

  const user = useSelector(userSelector);

  const [accountProjects, setAccountProjects] = useState([]);
  
  useEffect(async() => {

    const response = await dispatch(fetchProjectForAccount({
      userId: user.id,
    }));

    setAccountProjects(response.data.projects.map((project) => {
      return {
        id: project.id,
        title: project.name,
        capital: `${project.capital} $ `,
        dataAdded: project.dateStart,
        projectRelease: project.dateFinish,
        owner: `${project.user.firstName} ${project.user.lastName}`,
      };
    }));
  }, []);

  return (
    <>
      <div className={style.account_projects_container}>
        <div className={style.account_projects_tab}>
          <span>Projects</span>
        </div>
        <div className={style.account_projects_subtitle}>
          <span>Here shows your all active projects</span>
        </div>
        <div className={style.account_projects_active_list_head}>
          <TableContainer sx={{ height: '70vh' }}>
            <Table sx={(styleAccount.text, styleAccount.table)}>
              <TableHead>
                <TableRow>
                  {headCells.map((headCell, key) => (
                    <TableCell
                      sx={(styleAccount.tableHeadStyle)}
                      key={key}>
                      {headCell.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody sx={styleAccount.tableBody}>
                {accountProjects.map((row, key) => {
                  return (
                    <TableRow
                      key={key}>
                      {Object.keys(row).map((col, id) => {
                        return(
                          <TableCell
                            key={id}
                            sx={(col === 'id' ? styleAccount.blockId : null)}
                            align={'left'}
                            scope='row'>
                            { row[col] } 
                          </TableCell>);
                      })}
                      <TableCell sx={styleAccount.text}>
                        <Button>
                          <Link to={`${routes.AuthRoutes.pathToProject}/${row.id}`}>
                            <OpenInNewIcon sx={{ color: '#7771D4' }} />
                          </Link>
                        </Button>
                      </TableCell>
                    </TableRow>);
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </>
  );
};


export default AccountPageProjects;