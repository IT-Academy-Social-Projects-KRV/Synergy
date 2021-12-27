const borderColorInput = '#7771d4';
const borderRadius = '10px';
const border = '2px solid #7771d4';

export const style = {
  textFieldWithoutMargin: {
    width: '100%',
    height: '25px',
    '& .MuiOutlinedInput-root': {
      '& > fieldset': {
        borderColor: borderColorInput,
        borderRadius: borderRadius,
        border: border
      },
      '&.Mui-focused fieldset': {
        borderColor: '#645fb5'
      },
      '&:hover fieldset': {
        borderColor: '#645fb5'
      }
    }
  },
  textFieldWithMarginRight: {
    mr: '10%',
    width: '100%',
    height: '25px',
    '& .MuiOutlinedInput-root': {
      '& > fieldset': {
        borderColor: borderColorInput,
        borderRadius: borderRadius,
        border: border
      },
      '&.Mui-focused fieldset': {
        borderColor: '#645fb5'
      },
      '&:hover fieldset': {
        borderColor: '#645fb5'
      }
    }
  },
  icons: {
    height: '15px',
    ml: -1
  },
  textFieldStart: {
    width: '48%',
    '& .MuiOutlinedInput-root': {
      '& > fieldset': {
        borderColor: borderColorInput,
        borderRadius: borderRadius,
        border: border
      },
      '&.Mui-focused fieldset': {
        borderColor: '#645fb5'
      },
      '&:hover fieldset': {
        borderColor: '#645fb5'
      }
    }
  },
  textFieldEnd: {
    width: '48%',
    '& .MuiOutlinedInput-root': {
      '& > fieldset': {
        borderColor: borderColorInput,
        borderRadius: borderRadius,
        border: border
      },
      '&.Mui-focused fieldset': {
        borderColor: '#645fb5'
      },
      '&:hover fieldset': {
        borderColor: '#645fb5'
      }
    }
  },
  box: {
    mx: '2%',
    color: 'silver',
    fontSize: '11px'
  }
};