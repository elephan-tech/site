import React from 'react';
import styled from 'styled-components';
import { IonIcon, Surface } from '..';
import { bool, object, string, func, any } from 'prop-types';

const Card = props => {
  const {
    onClick,
    screen,
    noMargin,
    fullWidth,
    alignText,
    cardImage,
    color = 'background',
    children
  } = props;

  const StyledCard = styled(Surface)`
    background: ${({ theme }) => typeof theme.palette[color] === 'string' ? theme.palette[color] : theme.palette[color].main};
    display: flex;
    flex-direction: ${screen && screen.size === 'small' ? 'row' : 'column'};
    padding: ${({ theme }) => theme.unit(2)};
    margin: ${({ theme }) => noMargin ? theme.unit(2) : 0};
    box-shadow: ${({ theme }) => theme.shadow()};
    min-height: 14px;
    height: 100%;
    min-width: 50px;
    width: ${ fullWidth ? 'inherit' : '-webkit-fill-available'};
    text-align: ${screen && screen.size === 'small' ? 'start' : alignText || 'start'};
    cursor: ${onClick ? 'pointer' : 'default'};
  `;

  const CardImage = styled.div`
   display: flex;
   justify-content: center;
   align-content: center;
   align-items: center;
   margin: ${({ theme }) => noMargin ? theme.unit() : 0};
  `;

  const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: ${({ theme }) => theme.unit()};
  margin: ${({ theme }) => noMargin ? theme.unit() : 0};
  `;

  const StyledIcon = styled(IonIcon)`
  font-size: 80px;
  color: ${({ theme }) => theme.palette.secondary.dark};
  /* filter: drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.4)); */
  `;


  return (
    <StyledCard {...props}>
      {cardImage && (<CardImage> <StyledIcon icon={cardImage} /></CardImage>)}
      <CardContent>{children}</CardContent>
    </StyledCard>
  );
};

Card.propTypes = {
  round: bool,
  style: object,
  onClick: func,
  screen: object,
  noMargin: bool,
  fullWidth: bool,
  alignText: string,
  cardImage: any,
  color: string,
  children: any
};

export default Card;