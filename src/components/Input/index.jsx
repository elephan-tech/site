import React, { useState, useEffect } from 'react'
import PropTypes, { object, string, array } from 'prop-types'
import {
  InputContainer,
  StyledInput,
  StyledIcon,
  ErrorMessage,
  Hint,
  InputComponent,
  Label
} from './styles';

const Input = ({
  label,
  variant,
  hint,
  placeholder,
  errorMessage,
  startIcon,
  endIcon,
  borderless,
  onChange
}
) => {

  const [error, setError] = useState({ valid: true, message: '' })
  const [pattern, setPattern] = useState('')

  const validator = {
    text: { regex: /^[a-z ,.'-]+$/i, message: 'Please enter text only' },
    tel: { regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g, message: 'Please Enter A Valid Phone Number' },
    email: { regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, message: 'Please Enter A Valid Email' },
    number: { regex: /([0-9])\w+/g, message: 'Numbers only' }
  };

  useEffect(() => {
    const validatorType = variant.toLowerCase()
    setPattern(validator[validatorType].regex)
  }, [variant])

  const handleChange = (e) => {
    const validatorType = variant.toLowerCase()
    const isValid = e.target.value.length !== 0 ? pattern.test(e.target.value) : false
    setError({ valid: isValid, message: validator[validatorType].message })
    onChange(e)
  }

  const renderAs = variant === 'message' ? 'textarea' : 'input';

  const { valid, message } = error;

  return (
    <InputComponent>
      <Label>{label}</Label>
      <InputContainer error={valid} borderless={borderless}>
        <StyledIcon>{startIcon && startIcon}</StyledIcon>
        <StyledInput as={renderAs} type={variant} placeholder={placeholder} pattern={pattern} onChange={handleChange} />
        <StyledIcon>{endIcon && endIcon}</StyledIcon>
      </InputContainer>
      {!valid && <ErrorMessage> {errorMessage || message}</ErrorMessage>}
      {hint && <Hint>{hint}</Hint>}
    </InputComponent>
  )
}

Input.propTypes = {
  label: string.isRequired,
  variant: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'number']).isRequired,
  hint: string,
  placeholder: string,
  errorMessage: string,
  startIcon: PropTypes.oneOfType([string, object, array]),
  endIcon: PropTypes.oneOfType([string, object, array]),
  onChange: PropTypes.func.isRequired
};

export default Input