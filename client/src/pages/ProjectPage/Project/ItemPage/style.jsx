export const style = {
  approveAndReject: {
    marginLeft: '16px',
    marginTop: '16px',
    marginBottom: '30px',
    '@media (max-width: 600px)': {
      height: '30px',
      width: '90px',
      fontSize: '12px',
      mt: '0'
    }
  },
  approve: {
    marginLeft: '30px'
  },
  disable: {
    width: '100px',
    height: '35px',
    background: 'silver',
    fontSize: '14px',
    borderRadius: '5px',
    '@media (max-width: 600px)': {
      height: '30px',
      width: '90px',
      fontSize: '12px'
    }
  },
  button: {
    mr: '10px',
    height: '40px',
    width: '100px',
    fontSize: '16px',
    fontWeight: '500',
    '@media (max-width: 600px)': {
      height: '30px',
      width: '90px',
      fontSize: '12px'
    }
  },
  input: {
    '& .MuiInputBase-input.Mui-disabled': {
      '-webkit-text-fill-color': '#21143e !important'
    }
  },
  inputName: {
    '& .MuiInputBase-input.Mui-disabled': {
      '-webkit-text-fill-color': '#21143e !important'
    },
    textAlign: 'center',
    fontWeight: '700',
    fontSize: '32px',
    color: '#21143e',
    '@media (max-width: 600px)': {
      fontSize: '20px'
    }
  },
  inputDate: {
    '& .MuiInputBase-input.Mui-disabled': {
      '-webkit-text-fill-color': '#564E45 !important'
    },
    width: '85px',
    '@media (max-width: 600px)': {
      fontSize: '14px'
    }
  },
  inputPrice: {
    '& .MuiInputBase-input.Mui-disabled': {
      '-webkit-text-fill-color': '#564E45 !important'
    },
    width: '85px',
    '@media (max-width: 600px)': {
      fontSize: '14px'
    }
  },
  inputDescription: {
    width: '100%',
    '& .MuiInputBase-input.Mui-disabled': {
      '-webkit-text-fill-color': '#21143E !important',
      fontSize: '16px',
      '@media (max-width: 600px)': {
        fontSize: '14px'
      }
    },
    '& .MuiInput-input': {
      fontSize: '16px',
      color: '#21143E',
      '@media (max-width: 600px)': {
        fontSize: '14px'
      }
    },
  }
};