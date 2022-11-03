import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';


const CheckboxMain = ({field, children}) => {
  return (
    <>
      <Checkbox 
        checked={field.checked}
        onChange={e => field.onChange(e)}
      />
      <InputLabel style={{display: 'inline'}} >{children}</InputLabel>
    </>
  );
};

export default CheckboxMain;