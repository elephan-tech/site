import React from 'react'
import styled from 'styled-components';

const SectionStyle = styled.div`
    min-height: calc(100vh - 80px);
    display: flex;
    flex-grow: 1;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    padding: ${props => props.theme.unit * 2};
    margin: 16px auto;
    background: white;
`;

const Section = ({ children, title }) => {
  return (
    <SectionStyle id={title}>
      {children}
    </SectionStyle>
  )
}

export default Section
