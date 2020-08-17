import React from 'react';
import { oneOf, any, string, bool } from 'prop-types';
import StyledTypography from './styles';

const Typography = ({
  color,
  variant = 'primary',
  children,
  shade,
  align = 'start',
  noMargin,
  ...props }) => {
  return (
    <StyledTypography
      variant={variant}
      align={align}
      color={color}
      shade={shade}
      noMargin={noMargin}
      {...props}
    >
      {children}
    </StyledTypography>
  );
};

Typography.defaultProps = {
  variant: 'h2',
  color: 'primary'
};

Typography.propTypes = {
  variant: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'overline', 'p', 'subtitle', 'caption', 'code', 'quote']),
  color: oneOf(['accent', 'secondary', 'primary', 'background', 'contrast']),
  align: oneOf(['center', 'start', 'end']),
  children: any,
  shade: string,
  noMargin: bool
};

export default Typography;
