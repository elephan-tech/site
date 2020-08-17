import styled from 'styled-components';

export default styled.div`
margin: ${({ theme }) => `${theme.unit(2)} ${theme.unit()}`};
margin-top: 100px;
`;
export const Divider = styled.div`
width: 100px;
height: 8px;
background: ${({ theme: { palette: { accent } } }) => `linear-gradient(to right,${accent.main},${accent.dark});`};
`;