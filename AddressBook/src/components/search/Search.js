import { StyledSearch, SearchInput, SearchButton, ClearButton } from './Styles';
import { observer, inject } from 'mobx-react';
import { Button } from '../elements';
import Input from './Input';
import IconSearch from '../../icons/search.svg';
import IconCross from '../../icons/cross.svg';

@inject('searchStore')
@observer
class Search extends React.Component {
    render() {
        const {
            value,
            isActive,
            handleChange,
            clearInput
        } = this.props.searchStore;

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
