import React, { useState, useContext, useEffect } from 'react';
import { Button } from 'dope-components';
import { ThemeContext } from 'styled-components';
import {
  Card,
  Input,
  IonIcon,
} from '..';
import sendEmail from '../../api/sendMail';
import { object, array } from 'prop-types';

const Form = ({ fields }) => {

  const theme = useContext(ThemeContext);

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = event => {
    event.preventDefault();
    sendEmail(formData);
    resetState();
  };

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const resetState = () => setFormData({ name: '', email: '', message: '' });

  return (
    <>
      {fields.map((field) => (
        <Input
          value={formData[field.name]}
          key={field.label}
          alignStart
          startIcon={<IonIcon icon={field.icon} slot="start" />}
          label={field.label}
          name={field.name}
          type={field.type}
          onChange={handleChange}
        />
      ))}
      <Button style={{ margin: 0 }} color={theme.palette.accent.main} onClick={handleSubmit} fullWidth size="large">
        submit
        </Button>
    </>
  );
};

Form.propTypes = {
  theme: object,
  fields: array
};



export default Form;
