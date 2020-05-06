import React from 'react'
import styled from 'styled-components'

const Grid = ({ children, row, spacing, align, justify, pad, noFlex, style }) => {

  const StyledGrid = styled.div`
    display: flex;
    flex-direction: ${row ? 'row' : 'column'};
    flex: 1 ${spacing || 1} auto;
    align-items: ${align || 'flex-start'};
    justify-content: ${justify || 'space-evenly'};
    margin: 0px ${({ theme }) => theme.unit()};
    padding: ${({ theme }) => pad && theme.unit()};
    width: ${noFlex ? '' : '-webkit-fill-available'};
  `
  return <StyledGrid style={style} children={children} />

}

export default Grid

