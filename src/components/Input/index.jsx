import React, { useState, useEffect } from 'react';
import PropTypes, { object, string, array, bool, func } from 'prop-types';
import { Button } from 'dope-components';
import {
  InputContainer,
  StyledInput,
  StyledIcon,
  ErrorMessage,
  Hint,
  InputComponent,
  Label,
} from './styles';
import { withTheme } from 'styled-components';

const Input = ({
  theme,
  label,
  type = 'text',
  hint,
  placeholder,
  errorMessage,
  startIcon,
  endIcon,
  borderless,
  alignStart,
  name,
  onChange,
  value,
  action,
  actionLabel,
}
) => {

  console.log({ theme });
  const [error, setError] = useState({ valid: true, message: '' });
  const [pattern, setPattern] = useState('');

  const validator = {
    text: { regex: /^[a-z ,.'-]+$/i, message: 'Please enter text only' },
    tel: { regex: /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s./0-9]*$/g, message: 'Please Enter A Valid Phone Number' },
    // eslint-disable-next-line no-control-regex
    email: { regex: /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/, message: 'Please Enter A Valid Email' },
    number: { regex: /([0-9])\w+/g, message: 'Numbers only' },
    password: { regex: /./, message: 'Password cannot be blank' },
    message: {}
  };

  useEffect(() => {
    const validatorType = type.toLowerCase();
    setPattern(validator[validatorType].regex || /./);
  }, [type]);

  const validate = (e) => {
    const validatorType = type.toLowerCase();
    const isValid = e.target.value.length !== 0 ? pattern.test(e.target.value) : false;
    setError({ valid: isValid, message: validator[validatorType].message || 'Cannot be blank' });
  };

  const handleChange = (e) => {
    validate(e);
    onChange(e);
  };

  const renderAs = type === 'message' ? { as: 'textarea', rows: 5, cols: 33 } : { as: 'input' };

  const { valid, message } = error;

  return (
    <InputComponent>
      <Label>{label}</Label>
      <InputContainer
        error={valid}
        borderless={borderless}
        alignStart={alignStart}
      >
        <StyledIcon>{startIcon && startIcon}</StyledIcon>
        <StyledInput
          {...renderAs}
          value={value}
          type={type}
          name={name}
          placeholder={placeholder}
          pattern={pattern}
          onChange={handleChange}
        />
        <StyledIcon>{endIcon && endIcon}</StyledIcon>
        {action && <Button value={value} onClick={action} color={theme.palette.accent.main} style={{ margin: 0 }}>{actionLabel}</Button>}
      </InputContainer>
      {!valid && <ErrorMessage> {errorMessage || message}</ErrorMessage>}
      {hint && <Hint>{hint}</Hint>}
    </InputComponent >
  );
};


Input.propTypes = {
  theme: object,
  label: string,
  type: PropTypes.oneOf(['text', 'tel', 'password', 'email', 'number', 'message']).isRequired,
  hint: string,
  placeholder: string,
  errorMessage: string,
  startIcon: PropTypes.oneOfType([string, object, array]),
  endIcon: PropTypes.oneOfType([string, object, array]),
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.string, PropTypes.bool]),
  borderless: bool,
  alignStart: bool,
  name: string,
  onChange: func,
  value: PropTypes.oneOfType([string, object, array, object]).isRequired,
  action: func,
  actionLabel: string,
};

export default withTheme(Input);