import styled from 'styled-components';
import Surface from '../Surface';


export const StyledLink = styled.div`
    transition: all 300ms cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
    cursor: pointer;
    &:hover {
      color: ${({ theme }) => theme.palette.primary.main} ;
      border-bottom: ${({ theme }) => `3px solid ${theme.palette.accent.main}`};
    }
    @media (max-width: 768px) {
      display: none;
    }
`;

export const Container = styled.div`
  z-index: 200;
  position: fixed;
  align-items: center;
  justify-content: center;
  height: 90px;
  background:${(props) => props.theme.palette.background};
  box-shadow:${(props) => props.shadow ? props.theme.shadow() : 'none'};
  width: 100%;
  margin: auto;
  display: flex;
`;
export const Nav = styled(Surface)`
  display: flex;
  padding: 0;
  margin: 24px auto 0px auto;
  border-radius: 30px;
  min-height: 60px;
  width: 90%;
  z-index: 1;
`;