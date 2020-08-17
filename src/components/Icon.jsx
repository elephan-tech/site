import React from 'react';
import { any } from 'prop-types';
import { IonIcon } from '.';
import styled from 'styled-components';

const Icon = ({ icon }) => {
  const StyledIcon = styled(IonIcon)`
    font-size: ${({ theme }) => theme.font.size.main};
  `;

  return <StyledIcon icon={icon} />;
};

Icon.propTypes = {
  icon: any
};

export default Icon;
