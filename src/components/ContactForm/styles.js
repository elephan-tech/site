import { IonCard } from "..";

export const Card = styled(IonCard)`
    padding: ${props => props.theme.unit(2)};
    margin: ${props => props.theme.unit(2)};
    box-shadow: ${props => props.theme.shadow()};
    min-height: 14px;
    min-width: 50px;
    width: ${props.fullWidth ? 'inherit' : 'fit-content'};
    text-align: ${props.alignText || 'start'};
    cursor: ${props.onClick ? 'pointer' : 'default'};
  `