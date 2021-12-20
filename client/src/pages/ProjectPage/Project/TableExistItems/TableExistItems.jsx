import { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import TextField from '@mui/material/TextField';
import styles from './TableExistItems.module.scss';
import routes from '../../../../configs/routes';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { fetchItemById } from '../../../../redux';
import STATUS from '../../../../consts/itemStatuses';
import { Button } from '@mui/material';

const style = {
  table: {
    scrollSnapMarginTop: '32px',
    minWidth: 300,
  },

  boxTable: {
    boxShadow: 'none',
    width: '100%',
    mb: 2,
  },

  tableBody: {
    '& > tr:nth-of-type(even)': {
      backgroundColor: '#f1f3f2',
    },
  },

  textField: {
    color: '#7771D4',
    ml: 4,
  },

  tableHead: {
    fontSize: '18px',
    fontWeight: 'medium',
  },

  tablePagination: {
    color: '#7771D4',
  },

  text: {
    color: '#564e45',
    fontSize: '14px',
    borderBottom: '1px solid #EEE6E7',
  },

  blockId: {
    backgroundColor: '#7771D4',
    color: 'white',
    fontSize: '18px',
    width: '50px',
    height: '50px',
    fontWeight: 'medium',
    padding: 0,
    textAlign: 'center',
  },
};

function createData(id, nameItem, costItem, dataAddedItem, statusItem) {
  return {
    id,
    nameItem,
    costItem,
    dataAddedItem,
    statusItem,
  };
}

const rows = [
  createData('#1', 'Hummer', '$432', '11.10.2021', 'Pending'),
  createData('#2', 'Dog', '$432', '11.10.2021', 'Applied'),
  createData('#3', 'Hotdog', '$432', '11.10.2021', 'Rejected'),
  createData('#4', 'Sink', '$432', '11.10.2021', 'Applied'),
  createData('#5', 'Metal tube', '$432', '11.10.2021', 'Pending'),
  createData('#6', 'Brushes', '$432', '11.10.2021', 'Rejected'),
  createData('#7', 'Clock', '$432', '11.10.2021', 'Applied'),
  createData('#8', 'Clue', '$432', '11.10.2021', 'Pending'),
  createData('#9', 'Bed', '$432', '11.10.2021', 'Applied'),
  createData('#10', 'Car', '$432', '11.10.2021', 'Pending'),
  createData('#11', 'Glasses', 0, '11.10.2021', 'Rejected'),
  createData('#12', 'Nails', '$432', '11.10.2021', 'Applied'),
  createData('#13', 'Workers', '$432', '11.10.2021', 'Rejected'),
];

function descendingComparator(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function getComparator(order, orderBy) {
  return order === 'desc'
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function stableSort(array, comparator) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) {
      return order;
    }
    return a[1] - b[1];
  });
  return stabilizedThis.map((el) => el[0]);
}

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
                  {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

const EnhancedTableToolbar = (props) => {
  const { numSelected } = props;

  return (
    <Toolbar>
      {numSelected > 0 ? (
        <Typography
          sx={{ flex: '1 1 100%' }}
          color='inherit'
          variant='subtitle1'
          component='div'
        >
          {numSelected} selected
        </Typography>
      ) : null}

      {numSelected > 0 ? (
        <Tooltip title='Delete'>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
      ) : (
        <>
          <Tooltip title='Filter list'>
            <IconButton>
              <FilterListIcon />
            </IconButton>
          </Tooltip>

          <TextField
            sx={style.textField}
            id='outlined-textarea'
            label='Search'
            placeholder='Type item...'
            multiline
            size='small'
          />
        </>
      )}
    </Toolbar>
  );
};

const mappedItems = (array) => {
  return array.map(item => {
    return {
      id: item.id,
      nameItem: item.name,
      costItem: item.price,
      dataAddedItem: item.updatedAt,
      statusItem: item.statusId,
    };
  });
};

const ExistItems = ({ itemsData }) => {
  const dispatch = useDispatch();

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('nameItem');
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(mappedItems(itemsData));
  }, []);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.nameItem);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, nameItem) => {
    const selectedIndex = selected.indexOf(nameItem);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, nameItem);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const isSelected = (nameItem) => selected.indexOf(nameItem) !== -1;

  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

  const redirectToItem = id => {
    dispatch(fetchItemById(id));
  };

  return (
    <>
      <h1 className={styles.table__title}>Exist Items</h1>

      <Box>
        <Paper sx={style.boxTable}>
          <EnhancedTableToolbar numSelected={selected.length} />

          <TableContainer sx={{ height: '70vh' }}>
            <Table sx={(style.text, style.table)} aria-labelledby='tableTitle'>
              <EnhancedTableHead
                numSelected={selected.length}
                order={order}
                orderBy={orderBy}
                onSelectAllClick={handleSelectAllClick}
                onRequestSort={handleRequestSort}
                rowCount={rows.length}
              />
              <TableBody sx={style.tableBody}>
                {stableSort(items, getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.nameItem);
                    const labelId = `enhanced-table-checkbox-${index}`;

                    return (
                      <TableRow
                        height='50px'
                        hover
                        onClick={(event) => handleClick(event, row.nameItem)}
                        role='checkbox'
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={row.id}
                        selected={isItemSelected}
                      >
                        <TableCell padding='checkbox'>
                          <Checkbox
                            checked={isItemSelected}
                            inputProps={{
                              'aria-labelledby': labelId,
                            }}
                            sx={{
                              color: '#7771D4',
                            }}
                          />
                        </TableCell>

                        <TableCell
                          component='th'
                          id={labelId}
                          scope='row'
                          sx={style.blockId}
                        >
                          {index + 1}
                        </TableCell>
                        <TableCell sx={style.text}>{row.nameItem}</TableCell>
                        <TableCell sx={style.text}>${row.costItem}</TableCell>
                        <TableCell sx={style.text}>
                          {row.dataAddedItem}
                        </TableCell>
                        <TableCell sx={style.text}>
                          <Box className={styles.statusApplied}>
                            {STATUS[row.statusItem]}
                          </Box>
                        </TableCell>
                        <TableCell sx={style.text}>
                          <Button onClick={() => redirectToItem(row.id)}>
                            <Link to={routes.AuthRoutes.pathToItemPage}>
                              <OpenInNewIcon sx={{ color: '#7771D4' }} />
                            </Link>
                          </Button>
                        </TableCell>
                      </TableRow>
                    );
                  })}
                {emptyRows > 0 && (
                  <TableRow>
                    <TableCell colSpan={7} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>

          <TablePagination
            sx={style.tablePagination}
            rowsPerPageOptions={[5, 10, 20]}
            component='div'
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </>
  );
};

export default ExistItems;
