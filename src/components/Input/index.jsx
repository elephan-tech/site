import React, { useState, useEffect } from 'react'
import PropTypes, { object, string, array } from 'prop-types'
import styled from 'styled-components'

const types = {
  variant: [
    'text',
    'button',
    'checkbox',
    'color',
    'date',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
  ]
}

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  padding: ${props => props.theme.unit()};
  margin: ${props => props.theme.unit()};
  border: 1px solid ${props => props.borderless ? 'none' : `${props.theme.palette.primary.main}50`};
  border-color: ${props => !props.error ? props.theme.palette.error : 'inherit'};
  border-radius: 5px;
  text-align: left;
  flex: 1 0 auto;
  &:active, &:focus, &:hover{
    border: 1px solid ${props => props.borderless ? 'none' : `${props.theme.palette.primary.main}`};
  }
`
const StyledInput = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
background: none;
height: ${props => props.type === 'message' && props.theme.unit(10)};
width: inherit;
flex-grow: 1;
border: none;
font-size: ${props => props.theme.font.size.main};
font-family: ${props => props.theme.font.family};
resize: none;
padding: 0 ${ props => props.theme.unit()};
  &:focus, &:active{
  outline: none;
}
`;

const StyledIcon = styled.div`
  min-height: 19px;
  min-width: 14px;
  text-align: left;
  color: ${props => props.theme.palette.secondary.dark};
`

const Label = styled.label`
color: ${ props => props.theme.palette.primary.dark};
margin: 0px ${props => props.theme.unit()};
`

const ErrorMessage = styled(Label)`
color: ${ props => props.theme.palette.error};
font-size: ${props => props.theme.font.size.small};
`

const Hint = styled(Label)`
color: ${ props => props.theme.palette.secondary.main};
font-size: ${props => props.theme.font.size.medium};
`
const InputComponent = styled.div`
font-size: ${props => props.theme.font.size.main};
  font-family: ${props => props.theme.font.family};
width: inherit;
display: flex;
flex-direction: column;
align-items: flex-start;
`;

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