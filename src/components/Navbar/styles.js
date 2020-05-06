import styled from 'styled-components'

export const Link = styled.div`
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main} ;
      border-bottom: ${({ theme }) => `3px solid ${theme.palette.accent.main}`};
    }
    @media (max-width: 768px) {
      display: none;
    }
`