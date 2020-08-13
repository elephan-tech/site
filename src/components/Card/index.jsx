import React from 'react'
import styled from 'styled-components'
import { Surface, Typography, IonIcon } from '..'

const Card = (props) => {

  console.log(props)

  const StyledCard = styled(Surface)`
    padding: ${props => props.theme.unit(2)};
    margin: ${props => props.noMargin ? props.theme.unit(2) : 0};
    box-shadow: ${props => props.theme.shadow()};
    min-height: 14px;
    min-width: 50px;
    max-height: 70%;
    width: ${props.fullWidth ? 'inherit' : 'fit-content'};
    text-align: ${props.alignText || 'start'};
    cursor: ${props.onClick ? 'pointer' : 'default'};
  `

  const CardImage = styled.div`
   display: flex;
   justify-content: center;
   align-content: center;
  `;

  return (
    <StyledCard round={props.round} style={props.style} onClick={props.onClick}>
      {props.cardImage
        && (<CardImage>
          {<img src={props.cardImage} alt={props.id} width="50%" height="50%" />}
        </CardImage>)}
      {props.children}
    </StyledCard>
  )
};

export default Card