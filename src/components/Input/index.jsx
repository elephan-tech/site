import React, { useState, useEffect } from 'react'
import PropTypes, { object, string, array, any } from 'prop-types'
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
  variant = "text",
  hint,
  placeholder,
  errorMessage,
  startIcon,
  endIcon,
  borderless,
  alignStart,
  name,
  onChange,
  value
}
) => {

  const [error, setError] = useState({ valid: true, message: '' })
  const [pattern, setPattern] = useState('')

  const validator = {
    text: { regex: /^[a-z ,.'-]+$/i, message: 'Please enter text only' },
    tel: { regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g, message: 'Please Enter A Valid Phone Number' },
    email: { regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, message: 'Please Enter A Valid Email' },
    number: { regex: /([0-9])\w+/g, message: 'Numbers only' },
    password: { regex: /./, message: 'Password cannot be blank' },
    message: {}
  };

  useEffect(() => {
    const validatorType = variant.toLowerCase()
    setPattern(validator[validatorType].regex || /./)
  }, [variant])

  const validate = () => {
    const validatorType = variant.toLowerCase()
    const isValid = e.target.value.length !== 0 ? pattern.test(e.target.value) : false
    setError({ valid: isValid, message: validator[validatorType].message || 'Cannot be blank' })
  }

  const renderAs = variant === 'message' ? { as: 'textarea', rows: 5, cols: 33 } : { as: 'input' };

  const { valid, message } = error;

  return (
    <InputComponent>
      <Label>{label}</Label>
      <InputContainer error={valid} borderless={borderless} alignStart={alignStart}>
        <StyledIcon>{startIcon && startIcon}</StyledIcon>
        <StyledInput {...renderAs} value={value} type={variant} name={name} placeholder={placeholder} pattern={pattern} onChange={onChange} />
        <StyledIcon>{endIcon && endIcon}</StyledIcon>
      </InputContainer>
      {!valid && <ErrorMessage> {errorMessage || message}</ErrorMessage>}
      {hint && <Hint>{hint}</Hint>}
    </InputComponent>
  )
}

Input.propTypes = {
  value: any.isRequired,
  label: string.isRequired,
  variant: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'number', 'message']).isRequired,
  hint: string,
  placeholder: string,
  errorMessage: string,
  startIcon: PropTypes.oneOfType([string, object, array]),
  endIcon: PropTypes.oneOfType([string, object, array]),
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool])
};

export default Input