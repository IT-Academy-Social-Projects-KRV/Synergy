const styleCustomersList = {

  tableHeadStyle: {
    padding: '7px', 
    paddingBottom: '15px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
};

const headCells = [
  {
    id: 'id',
    label: 'ID',
  },
  {
    id: 'firstName',
    label: 'First Name',
  },
  {
    id: 'lastName',
    label: 'Last Name',
  },
  {
    id: 'email',
    label: 'E-mail',
  },
  {
    id: 'createdAt',
    label: 'Data registration',
  },
  {
    id: 'updatedAt',
    label: 'Update date',
  },
  {
    id: 'openPage',
    label: 'Open page',
  }
];

export { headCells, styleCustomersList } ;