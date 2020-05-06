import React from 'react'
import PropTypes, { arrayOf, oneOf } from 'prop-types'

const Typography = (props) => {
  return (c
    <StyledTypography color={props.color}>
      {props.children}
    </StyledTypography>
  )
}

Typography.propTypes = {
  variant: oneOf(['h1, h2, h3, h4, h5, h6, button, overline, body, subtitle, caption, code, quote'])
}

export default Typography
