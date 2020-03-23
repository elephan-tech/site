import React from 'react'
import styled from 'styled-components'

const Card = (props) => {

  const CardStyles = styled.div`
  font-family: ${props => props.theme.font.family};
  font-size: ${props => props.theme.font.size.main};
  border-radius: ${props.round ? '5px' : '2px'};
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
    <CardStyles style={props.style} onClick={props.onClick}>
      {props.children}
    </CardStyles>
  )
};

export default Card