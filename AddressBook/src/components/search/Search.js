import { StyledSearch, SearchInput, SearchButton, ClearButton } from './Styles';
import { observer, inject } from 'mobx-react';
import { Button } from '../elements';
import IconSearch from '../../icons/search.svg';
import IconCross from '../../icons/cross.svg';

@inject('SearchStore')
@observer
class Search extends React.Component {
    searchStore = this.props.SearchStore.create({
        value: ''
    });

    render() {
        const {
            value,
            isActive,
            handleChange,
            clearInput
        } = this.searchStore;

        return (
            <StyledSearch>
                <SearchButton as={Button}>{<IconSearch />}</SearchButton>
                <SearchInput
                    type="text"
                    placeholder="Search"
                    onChange={handleChange}
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
