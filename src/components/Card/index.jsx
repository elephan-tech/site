import React from 'react'
import styled from 'styled-components'
import Surface from '../Surface';

const Card = (props) => {

  const CardStyles = styled(Surface)`
    padding: ${props => props.theme.unit(2)};
    margin: ${props => props.theme.unit(2)};
    box-shadow: ${props => props.theme.shadow()};
    min-height: 14px;
    min-width: 50px;
    width: ${props.fullWidth ? 'inherit' : 'fit-content'};
    text-align: ${props.alignText || 'start'};
    cursor: ${props.onClick ? 'pointer' : 'default'};
  `
  return (
    <CardStyles round={props.round} style={props.style} onClick={props.onClick}>
      {props.children}
    </CardStyles>
  )
};

export default Card