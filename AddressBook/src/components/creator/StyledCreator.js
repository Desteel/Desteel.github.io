import styled from "styled-components";
import Button from "../elements/";

export const StyledInputbox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const StyledInput = styled.input`
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-radius: 4px;
    padding: 4px;
`;

export const StyledSaveButton = styled(Button)`
    outline: 0;
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 6px;
    background-color: transparent;
    color: inherit;
`;
