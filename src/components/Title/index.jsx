import React from 'react';
import StyledTitle, { Divider } from './styles.js';
import { Typography } from '..';
import { string, object, any, oneOfType } from 'prop-types';

const Title = ({ subtitle, children }) => {
  return (
    <StyledTitle>
      <Typography variant={typeof subtitle === 'string' ? 'overline' : 'h1'} as={typeof subtitle === 'string' ? 'h2' : 'div'} color="secondary">{subtitle}</Typography>
      <Typography variant="h1" noMargin>{children}</Typography>
      <Divider />
    </StyledTitle>
  );
};

Title.propTypes = { children: any, subtitle: oneOfType([string, object]) };

export default Title;
