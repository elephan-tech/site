import React from 'react';
import Flex from './Flex';
import { any, string, object } from 'prop-types';

const Center = ({ children, direction, style }) => {
  return (
    <div style={{ display: 'flex', flexDirection: direction, margin: '16px 8px', ...style }}>
      <Flex />
      <div>{children}</div>
      <Flex />
    </div>
  );
};

Center.propTypes = {
  direction: string,
  children: any.isRequired,
  style: object
};

export default Center;


