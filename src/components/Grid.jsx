import styled from 'styled-components'

import React from 'react'

const Grid = ({ children, row, spacing, align, justify }) => {

  const StyledGrid = styled.div`
    display: flex;
    flex-direction: ${row ? 'row' : 'column'};
    flex: 1 ${spacing || 1} auto;
    align-items: ${align || 'flex-start'};
    justify-content: ${justify || 'space-evenly'};
    margin: 0px ${({ theme }) => theme.unit()};
    padding: ${({ theme }) => theme.unit()};
    width: -webkit-fill-available;
    min-width : ${ row && '50%'};
  `
  return (
    <StyledGrid>
      {children}
    </StyledGrid>
  )
}

export default Grid

