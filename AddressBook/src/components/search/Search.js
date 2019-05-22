import { StyledSearch, SearchInput, SearchButton, ClearButton } from './Styles';
import { observer, inject } from 'mobx-react';
import { Button } from '../elements';
import IconSearch from '../../icons/search.svg';
import IconCross from '../../icons/cross.svg';

@inject('searchStore')
@observer
class Search extends React.Component {
    handleChange = e => {
        this.props.searchStore.changeValue(e.target.value);
    };

    render() {
        const {
            value,
            isActive,
            clearInput
        } = this.props.searchStore;

        return (
            <StyledSearch>
                <SearchButton as={Button}>{<IconSearch />}</SearchButton>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    onChange={this.handleChange}
                    value={value}
                />
                <ClearButton
                    as={Button}
                    action={clearInput}
                    isActive={isActive}
                >
                    {<IconCross />}
                </ClearButton>
            </StyledSearch>
        );
    }
}

export default Search;
