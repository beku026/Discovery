import React from 'react';
import TextareaAutosize from '@mui/material/TextareaAutosize';

const TextArea = ({ field, errors }) => (
  <TextareaAutosize
    aria-label="Text Area"
    minRows={5}
    margin='normal'
    placeholder="Text Area"
    onChange={e => field.onChange(e)}
    value={field.value}
    style={{ width: "460px", margin: '20px 0', padding: '20px' }}
    maxLength={200}
  />
)

export default TextArea;