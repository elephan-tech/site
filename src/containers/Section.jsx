import React from 'react'
import styled from 'styled-components';
import { IonGrid, IonRow, Center } from '../components'

const SectionStyle = styled.div`
    min-height: calc(90vh);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-content: center;
    padding: ${props => props.theme.unit(2)};
    /* margin: ${props => props.theme.unit(3)}; */
    background: ${props => props.theme.palette.background};
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: ${props => props.position};
    font-family: ${props => props.theme.font.family};
`;

const Section = (props) => {
  return (
    <SectionStyle {...props}>
      <IonGrid ionGridPadding={props.theme.unit(3)} fixed id={props.title} style={{ display: 'flex', marginTop: 50 }}>
        <IonRow></IonRow>
        <IonRow class="ion-align-items-center">
          {props.children}
        </IonRow>
        <IonRow></IonRow>
      </IonGrid>
    </SectionStyle>
  )
}

export default Section
