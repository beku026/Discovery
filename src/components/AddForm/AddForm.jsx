import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';

const names = [
  'text',
  'number',
  'date',
  'file'
];

const AddForm = ({ setInputAdd, inputAdd }) => {
  const [inputValue, setInputValue] = useState({
    placeholder: '',
    type: '',
    id: Date.now(),
  })
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

  const handleClick = () => {
    setInputAdd([...inputAdd, inputValue ])
    setInputValue({
      placeholder: '',
      type: '',
      id: Date.now()
    })
  }

  return (
    <div className='input_add_forrm'>
      <h4>Keyword</h4>
      <TextField
        size='small'
        label="placeholder to new form"
        fullWidth
        value={inputValue.placeholder}
        onChange={e => setInputValue({...inputValue, placeholder: e.target.value})}
        margin='none'
      />
      <Select
        labelId="demo-multiple-name-label"
        id="demo-multiple-name"
        value={inputValue.type}
        fullWidth
        onChange={e => setInputValue({...inputValue, type: e.target.value})}
        input={<OutlinedInput />}
        MenuProps={MenuProps}
      >
        {names.map((name, i) => (
          <MenuItem
            key={i}
            value={name}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
      <Button
        variant="outlined"
        onClick={handleClick}
      >
        Submit
      </Button>
    </div>
  );
};

export default AddForm;