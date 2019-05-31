/// <reference path="../../globals.d.ts" />
import React from 'react';
import { observer, inject } from 'mobx-react';
import { IEventValue } from '../../types';
import { TSearchStore } from '../../models/Search';
// elem
import { StyledSearch, SearchInput, SearchButton, ClearButton } from './Styles';
import { Button } from '../elements';
import IconSearch from '../../assets/icons/search.svg';
import IconCross from '../../assets/icons/cross.svg';

interface IInjectedProps {
    searchStore: TSearchStore;
}

@inject('searchStore')
@observer
class Search extends React.Component<IInjectedProps, {}> {
    handleChange = (e: IEventValue) => {
        this.props.searchStore.changeValue(e.target.value);
    };

    render() {
        const { value, isActive, clearInput } = this.props.searchStore;

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
