import React from 'react'
import styled from 'styled-components'

const Grid = ({
  children,
  row,
  spacing,
  align,
  justify,
  pad,
  noFlex,
  style,
  itemSpacing,
  hide,
  noMargin
}) => {

  const StyledGrid = styled.div`
    display: ${hide ? 'none' : 'flex'};
    flex-direction: ${row ? 'row' : 'column'};
    flex: 1 ${spacing || 1} auto;
    align-items: ${align || 'flex-start'};
    justify-items: ${itemSpacing || 'space-between'};
    justify-content: ${justify || 'space-evenly'};
    margin: 0px ${({ theme }) => noMargin ? '0px' : theme.unit()};
    padding: ${({ theme }) => pad && theme.unit()};
    width: ${noFlex ? '' : '-webkit-fill-available'};
  `
  return <StyledGrid style={style} children={children} />

}

export default Grid

