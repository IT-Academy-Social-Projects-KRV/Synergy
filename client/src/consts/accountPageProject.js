const styleAccount = {

  table: {
    scrollSnapMarginTop: '32px',
    minWidth: 300,
  },

  tableHeadStyle: {
    padding: '7px', 
    paddingBottom: '15px',
    fontSize: '16px',
    fontWeight: 'bold'
  },
  
  textHead: {
    padding: '7px',
    fontSize: '16px',
    lineHeight: '19px',
    fontWeight: 'bold'

  },
  text: {
    color: '#564e45',
    fontSize: '16px',
    borderBottom: '1px solid #EEE6E7',
  },

  tableBody: {
    '& > tr:nth-of-type(even)': {
      backgroundColor: '#f1f3f2',
    },
  },

  blockId: {
    backgroundColor: '#7771D4',
    color: 'white',
    fontSize: '18px',
    width: '50px',
    height: '80px',
    fontWeight: 'medium',
    padding: 0,
    textAlign: 'center',
  },
};

const headCells = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'title',
    label: 'Title',
  },
  {
    id: 'capital',
    label: 'Capital',
  },
  {
    id: 'dataAdded',
    label: 'Data added',
  },
  {
    id: 'projectRelease',
    label: 'Project release',
  },
  {
    id: 'owner',
    label: 'Owner',
  },
  {
    id: 'openPage',
    label: 'Open page',
  },
];

export { styleAccount, headCells };