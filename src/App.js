import React, { useState } from 'react'
import './App.css';
import {useForm, Controller, useFormState} from 'react-hook-form'
import Button from '@mui/material/Button';
import MultipleSelect from './components/select/Select';
import CheckboxMain from './components/checkbox/Checkbox'
import TextArea from './components/TextArea/TextArea';
import RadioMain from './components/Radio/Radio'
import Input from './components/Input/Input';
import InputLabel from '@mui/material/InputLabel';
import { validateEmail, validateName, validatePassword } from './components/ValidationCheck/ValidationCheck';
import AddForm from './components/AddForm/AddForm';


const App = () => {
  const { handleSubmit, control} = useForm();
  const { errors } = useFormState({ control })
  const [inputAdd, setInputAdd] = useState([])
  const [showInput, setShowInput] = useState(false)
  const handleClick = () => showInput ? setShowInput(false) : setShowInput(true);
  const onSubmit = data => console.log(data);

  return (
    <div className="App">
      <form onSubmit={handleSubmit(onSubmit)} className="auth-form_form">
        <Button 
          variant="contained"
          className='add_btn'
          onClick={handleClick}
        >
          Add Input
        </Button>
        {
          showInput && <AddForm 
            setInputAdd={setInputAdd} 
            inputAdd={inputAdd}
          />
        }
        <InputLabel>Input Name</InputLabel>
        <Controller
          name="Name"
          control={control}
          rules={validateName}
          render={({ field }) => (
            <Input field={field} errors={errors.Name} type={'text'}>Name</Input>
          )}
        />
        <InputLabel>Input Email</InputLabel>
        <Controller
          control={ control }
          name='Email'
          rules={validateEmail}
          render={({ field }) => (
            <Input field={field} errors={errors.Email} type={'text'}>Email</Input>
          )}
        />
        <InputLabel>Input Password</InputLabel>
        <Controller
          control={ control }
          name='Password'
          rules={ validatePassword }
          render={({ field }) => (
            <Input field={field} errors={errors.Password} type={'text'}>Password</Input>
          )}
        />
        {
          inputAdd?.map((item, i) => (
            <Controller
              key={i}
              control={ control }
              name={item.placeholder}
              rules={validateName}
              render={({ field }) => (
                <Input field={field} errors={errors.Password} type={item.type}>{item.placeholder}</Input>
              )}
            />
          ))
        }
        <InputLabel>Input Select</InputLabel>
        <Controller 
          control={control}
          name="select"
          rules={{ required: "true"}}
          render={({field}) => 
            <MultipleSelect field={field} errors={errors.select} />
          }
        />
        <Controller 
          control={control}
          name="checkbox"
          rules={{required: true}}
          render={({field}) => (
            <CheckboxMain field={field}>Я принимаю условие</CheckboxMain>
          )}
        />
        <Controller 
          control={control}
          name="textArea"
          rules={{ required: true }}
          render={({field}) => (
            <TextArea field={field} />
          )}
        />
        <Controller 
          control={control}
          name="radio"
          rules={{ required: true }}
          render={({field}) => (
            <RadioMain field={field}/>
          )}
        />
        <Button
          type="submit"
          variant="contained"
          margin='normal'
          fullWidth={ true }
          disableElevation={ true }
        >
          Submite Button
        </Button>
      </form>
    </div>
  );
}

export default App;
