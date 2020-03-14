import React from 'react'
import styled from 'styled-components';

const SectionStyle = styled.div`
    min-height: calc(100vh - 80px);
    /* width: 100%; */
    margin: auto;
    background: white;
    border: 2px solid  purple;
`;

const Section = ({children, title}) => {
  return (
    <SectionStyle id={title}>
      {title}
      {children}
    </SectionStyle>
  )
}

export default Section
