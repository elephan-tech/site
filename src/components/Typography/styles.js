import styled from 'styled-components';
import { getTypographyStyles } from './utils';

const StyledTypography = styled.h1`
  ${props => getTypographyStyles(props)}
`;

export default StyledTypography;