import React from 'react'
import { oneOf } from 'prop-types'
import StyledTypography from './styles'

const Typography = ({ color, variant, children, shade, ...props }) => {
  return (
    <StyledTypography variant={variant} color={color} shade={shade} {...props}>
      {children}
    </StyledTypography>
  )
}

Typography.defaultProps = {
  variant: 'h2',
  color: 'black'
}

Typography.propTypes = {
  variant: oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'button', 'overline', 'p', 'subtitle', 'caption', 'code', 'quote']),
  color: oneOf(['accent', 'secondary', 'primary', 'black', 'white', 'background', 'contrast'])
}

export default Typography
