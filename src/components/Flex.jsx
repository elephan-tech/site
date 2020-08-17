import React from 'react';
import { any } from 'prop-types';

const Flex = ({ children }) => {
  return (
    <div style={{ flexGrow: 1 }}>
      {children}
    </div>
  );
};

Flex.propTypes = {
  children: any
};
export default Flex;
