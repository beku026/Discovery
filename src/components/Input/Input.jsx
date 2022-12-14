import React, { useState } from 'react';
import TextField from '@mui/material/TextField';

const Input = ({ field, errors, children, type }) => {
  const [inputState, setInputState] = useState('');
  return (
    <TextField 
    title='click'
      label={children}
      size='small'
      margin='normal'
      type={type}
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

export default Input;