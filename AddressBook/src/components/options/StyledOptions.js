import styled from "styled-components";
import Button from "../button/Button";

export const StyledOptions = styled.div`
    margin-right: -10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
`;

export const StyledOptionsBtn = styled(Button)`
    background-color: transparent;
    padding: 5px;
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-right: none;
    color: inherit;    

    &:first-child {
        border-top-left-radius: 5px;
    }

    &:last-child {
        border-bottom-left-radius: 5px;
    }

    &:not(:last-child) {
        border-bottom: none;
    }
`;