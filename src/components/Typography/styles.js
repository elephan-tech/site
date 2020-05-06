import styled from "styled-components"
import { getTypographyStyle } from './utils'

export const StyledTypography = styled.h1`
  ${props => getTypographyStyle(props.variant)}
`