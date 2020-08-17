import React from 'react';
import styled from 'styled-components';
import { IonGrid, IonRow } from '../components';
import { any, string } from 'prop-types';

const SectionStyle = styled.div`
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-content: center;
    padding: ${props => props.theme.unit(2)};
    background: ${props => props.theme.palette.background};
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: ${props => props.position};
    font-family: ${props => props.theme.font.family};
`;

const StyledGrid = styled(IonGrid)`
  display: flex;
`;

const Section = (props) => {
  const { children, title } = props;
  return (
    <SectionStyle {...props}>
      <StyledGrid fixed id={title} style={{ display: 'flex' }}>
        <IonRow class="ion-align-items-center">
          {children}
        </IonRow>
      </StyledGrid>
    </SectionStyle>
  );
};

Section.propTypes = {
  children: any,
  title: string
};

export default Section;
