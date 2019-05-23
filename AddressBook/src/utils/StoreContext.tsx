import React from "react";
import { Observer } from 'mobx-react';
import searchStore from '../stores/SearchStore';
import { TSearchStore } from '../models/Search';

const StoreContext = React.createContext(searchStore);

interface Props {
    children(searchStore: TSearchStore): JSX.Element | null;
}

const WithStore: React.FunctionComponent<Props> = ({ children }) => (
    <StoreContext.Consumer>
        {searchStore => <Observer>{() => children(searchStore)}</Observer>}
    </StoreContext.Consumer>
);

export default WithStore;