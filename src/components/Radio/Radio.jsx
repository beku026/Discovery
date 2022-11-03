import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';

const RadioMain = ({field}) => {
  return (
    <FormControl
      margin='normal'
    >
      <FormLabel id="demo-row-radio-buttons-group-label">Хотите получать уведомоение ?</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={field.checked}
        onChange={e => field.onChange(e)}
      >
        <FormControlLabel value="Female" control={<Radio />} label="Да" />
        <FormControlLabel value="Male" control={<Radio />} label="Нет" />
        <FormControlLabel value="Other" control={<Radio />} label="Лишь важное" />
      </RadioGroup>
    </FormControl>
  );
};

export default RadioMain;