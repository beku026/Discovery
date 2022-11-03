import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const today = new Date();
const date = today.setDate(today.getDate()); 
const defaultValue = new Date(date).toISOString().split('T')[0]

const NewInput = ({ field, errors, children, type}) => {
  const [inputState, setInputState] = useState('');
  return (
    <TextField 
      label={children}
      size='small'
      margin='normal'
      type={type}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        min: defaultValue
      }}
      className='auth-form_input'
      fullWidth
      onChange={e => {
        setInputState(e.target.value)
        field.onChange(e)
      }}
      value={inputState}
      error={!!errors?.message}
      helperText={errors?.message}
    />
  )
}

export default NewInput;