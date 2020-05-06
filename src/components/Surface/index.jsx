import React from 'react'
import styled from 'styled-components'

const StyledSurface = styled.div`
    font-family: ${({ theme }) => theme.font.family};
    font-size: ${({ theme }) => theme.font.size.main};
    border-radius: ${({ round }) => round ? '30px' : '5px'};
    box-shadow: ${({ theme }) => theme.shadow()};
    width: ${({ fullWidth }) => fullWidth ? 'inherit' : 'fit-content'};
    min-height: 40px;
    text-align: start;
    background: ${({ theme }) => theme.palette.white};
    cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
`

const Surface = (props) => {

  return <StyledSurface {...props}>{props.children}</StyledSurface>
}

export default Surface
