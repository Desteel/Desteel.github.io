import styled from "styled-components";
import { Button } from "../elements/";

export const StyledSearch = styled.form`
    display: flex;
    max-width: 580px;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: ${props => props.theme.borderRadius};
`;

export const SearchButton = styled(Button)`
    outline: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 6px;
    background-color: transparent;
    color: inherit;
`;

export const ClearButton = styled(SearchButton)`
    transition: opacity 0.2s, visibility 0.2s;
    opacity: ${props => (props.isActive ? "1" : "0")};
    visibility: ${props => (props.isActive ? "visible" : "hidden")};
`;

export const StyledInput = styled.input.attrs({
    type: "text",
    placeholder: "Search"
})`
    outline: 0;
    border: none;
    flex: 1;
    padding: 1rem;
    background-color: transparent;
`;
