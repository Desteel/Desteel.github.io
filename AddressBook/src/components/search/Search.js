import styled from "styled-components";
import { observer, inject } from "mobx-react";
import Button from "../button/Button";
import IconSearch from "../../icons/search.svg";
import IconCross from "../../icons/cross.svg";
import Input from "./Input";

const StyledSearch = styled.form.attrs({
    method: "get"
})`
    display: flex;
    max-width: 580px;
    width: 100%;

    background-color: rgba(0, 0, 0, 0.04);
    border: 1px solid rgba(0, 0, 0, 0);
    border-radius: 8px;
`;
const SearchButton = styled(Button)`
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
const ClearButton = styled(SearchButton)`
    transition: opacity 0.2s, visibility 0.2s;
    opacity: ${props => (props.isActive ? "1" : "0")};
    visibility: ${props => (props.isActive ? "visible" : "hidden")};
`;

@inject("searchStore")
@observer
class Search extends React.Component {
    render() {
        const { isActive, clearInput } = this.props.searchStore;

        return (
            <StyledSearch>
                <SearchButton>{<IconSearch />}</SearchButton>
                <Input />
                <ClearButton action={clearInput} isActive={isActive}>
                    {<IconCross />}
                </ClearButton>
            </StyledSearch>
        );
    }
}

export default Search;
