import React from 'react'
import styled from 'styled-components';

const SectionStyle = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-content: center;
    padding: ${props => props.theme.unit(3)};
    margin: ${props => props.theme.unit(3)};
    background: white;
    background-image: ${props => props.backgroundImage};
    background-repeat: no-repeat;
    background-position: ${props => props.position};
`;

const Section = (props) => {
  return (
    <SectionStyle {...props}>
      {props.children}
    </SectionStyle>
  )
}

export default Section
