import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel } from '@mui/material';
import Box from '@mui/material/Box';
import { visuallyHidden } from '@mui/utils';

const style = {
  tableHead: {
    fontSize: '18px',
    fontWeight: 'medium',
  },
};


const headCells = [
  {
    id: 'id',
    numeric: false,
    disablePadding: true,
    label: 'ID',
  },
  {
    id: 'ItemName',
    numeric: true,
    disablePadding: false,
    label: 'Item name',
  },
  {
    id: 'cost',
    numeric: true,
    disablePadding: false,
    label: 'Cost',
  },
  {
    id: 'dataAdded',
    numeric: false,
    disablePadding: false,
    label: 'Data added',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
  {
    id: 'openPage',
    numeric: false,
    disablePadding: false,
    label: 'Open page',
  },
];

const EnhancedTableHead = (props) => {
  const {
    onSelectAllClick,  
    order,
    orderBy,
    numSelected,
    rowCount,
    onRequestSort,
  } = props;
    
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };
  
  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={onSelectAllClick}
            inputProps={{
              'aria-label': 'select all items',
            }}
            sx={{
              color: '#7771D4',
            }}
          />
        </TableCell>
  
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            padding={headCell.disablePadding ? 'none' : 'normal'}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={style.tableHead}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : 'asc'}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component='span' sx={visuallyHidden}>
                  { order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;