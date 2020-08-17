import React from 'react';
import styled from 'styled-components';
import { any } from 'prop-types';

const StyledSurface = styled.div`
    font-family: ${(props) => props.theme.font.family};
    font-size: ${({ theme }) => theme.font.size.main};
    border-radius: ${({ round }) => round ? '30px' : '5px'};
    box-shadow: ${(props) => props.raised ? props.theme.shadow() : 'none'};
    width: ${({ fullWidth }) => fullWidth ? 'inherit' : 'fit-content'};
    min-height: 40px;
    text-align: start;
    background: ${(props) => props.theme.palette.background};
    cursor: ${({ onClick }) => onClick ? 'pointer' : 'default'};
`;

const Surface = (props) => <StyledSurface {...props}>{props.children}</StyledSurface>;

Surface.propTypes = { children: any };

export default Surface;

