import styled from "styled-components";
import Button from "../elements/";

export const Inputbox = styled.div`
    display: flex;
    flex-direction: column;
`;

export const Input = styled.input`
    border: ${({theme}) => `${theme.border} ${theme.main}`};
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 10px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    input {
        margin-bottom: 0;
    }
`;

export const Btn = styled(Button)`
    outline: 0;
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 6px;
    background-color: transparent;
    color: inherit;
`;

export const OptionBtn = styled(Button)`
    outline: 0;
    padding: 0;
    background-color: transparent;
    color: inherit;
`;

