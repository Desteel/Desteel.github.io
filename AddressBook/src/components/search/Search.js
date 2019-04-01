import { StyledSearch, SearchButton, ClearButton } from "./Styles";
import { observer, inject } from "mobx-react";
import Input from "./Input";
import IconSearch from "../../icons/search.svg";
import IconCross from "../../icons/cross.svg";

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
