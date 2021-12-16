
function createData(id, nameItem, costItem, dataAddedItem, statusItem) {
  return {
    id,
    nameItem,
    costItem,
    dataAddedItem,
    statusItem,
  };
}

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

export { rows, style };