import styled from 'styled-components'

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: inherit;
  padding: ${props => props.theme.unit()};
  margin: ${props => props.theme.unit()};
  margin-left: ${props => props.alignStart ? '0px' : props.theme.unit};
  border: 1px solid ${props => props.borderless ? 'none' : `${props.theme.palette.primary.main}50`};
  border-color: ${props => !props.error ? props.theme.palette.error : 'inherit'};
  border-radius: 5px;
  text-align: left;
  flex: 1 0 auto;
  &:active, &:focus, &:hover{
    border: 1px solid ${props => props.borderless ? 'none' : `${props.theme.palette.primary.main}`};
  }
`
export const StyledInput = styled.input`
  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
input[type="number"] {
    -moz-appearance: textfield;
}
background: none;
height: ${props => props.type === 'message' && props.theme.unit(10)};
width: inherit;
flex-grow: 1;
border: none;
font-size: ${props => props.theme.font.size.main};
font-family: ${props => props.theme.font.family};
resize: none;
padding: 0 ${ props => props.theme.unit()};
  &:focus, &:active{
  outline: none;
}
`;

export const StyledIcon = styled.div`
  min-height: 19px;
  min-width: 14px;
  text-align: left;
  color: ${props => props.theme.palette.secondary.dark};
`

export const Label = styled.label`
color: ${ props => props.theme.palette.primary.dark};
margin: 0px ${props => props.theme.unit()};
`

export const ErrorMessage = styled(Label)`
color: ${ props => props.theme.palette.error};
font-size: ${props => props.theme.font.size.small};
`

export const Hint = styled(Label)`
color: ${ props => props.theme.palette.secondary.main};
font-size: ${props => props.theme.font.size.medium};
`
export const InputComponent = styled.div`
font-size: ${props => props.theme.font.size.main};
  font-family: ${props => props.theme.font.family};
width: inherit;
display: flex;
flex-direction: column;
align-items: flex-start;
`;
