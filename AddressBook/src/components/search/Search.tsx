import React from 'react';
import { observer, inject } from 'mobx-react';
import { TSearchStore } from '../../models/Search';
// elem
import { StyledSearch, SearchInput, SearchButton, ClearButton } from './Styles';
import { Button } from '../elements';
import IconSearch from '../../icons/search.svg';
import IconCross from '../../icons/cross.svg';

interface ISearchProps {}
interface IInjectedProps extends ISearchProps {
    searchStore: TSearchStore;
}

@inject('searchStore')
@observer
class Search extends React.Component<ISearchProps, {}> {
    get injected() {
        return this.props as IInjectedProps;
    }

    handleChange = e => {
        this.injected.searchStore.changeValue(e.target.value);
    };

    render() {
        const { value, isActive, clearInput } = this.injected.searchStore;

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
