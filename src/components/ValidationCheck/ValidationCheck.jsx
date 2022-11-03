const required = "Поле не может быть пустым";

export const validateEmail = {
  required,
  validate: (value) => {
    if ( value.match(/[а-яА-Я]/) ) {
      return 'Поле не должно содердать русские буквы'
    }
    else if  ( !value.match(/@/) ) 
    {
      return 'Поле должен иметь символ "@"'
    }   
    return true
  }
}

export const validatePassword = {
  required,
  validate: (value) => {
    if ( !value.match(/[A-ZА-Я]/) ) 
    {
      return 'Поле пароля должен иметь хотя-бы 1 заглавную букву'
    }
    else if  ( !value.match(/[.,!@/:;'"#$%&*+-]/)) 
    {
      return 'Поле должен иметь символ хотя-бы 1 симвод';
    }  
    else if ( value.length < 8 )
    {
      return 'Пароль должно содержать минимум 8 символов';
    }
    return true
  }
}

export const validateName = {
  required,
  validate: (value) => {
    if (value.length < 3) 
    {
      return 'Поле должно содержать минимум 3 буквы'
    }
    return true;
  }
}