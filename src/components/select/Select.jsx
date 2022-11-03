import React, { useState } from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 30;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

export default function MultipleSelect({field, errors}) {
  const [ selectState, setSelectState] = useState('')
  const handleCHange = (e) => {
    setSelectState(e.target.value)
    field.onChange(e)
  }
  return (
    <>
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={selectState}
        fullWidth
        onChange={handleCHange}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
        error={!!errors?.message}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </>
  );
}