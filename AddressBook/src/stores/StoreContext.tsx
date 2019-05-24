import React from 'react';
import { Observer } from 'mobx-react';
import searchStore from '../stores/SearchStore';
import { TSearchStore } from '../models/Search';

import searchStoreTEST from '../stores/SearchStoreTEST';

const stores = {
    searchStore,
    searchStoreTEST
};

interface IStores {
    searchStore: TSearchStore;
    searchStoreTEST: TSearchStore;
}

const StoreContext = React.createContext(stores);

interface IProps {
    children(store: IStores): JSX.Element | null;
}

export const WithStore: React.FunctionComponent<IProps> = ({ children }) => (
    <StoreContext.Consumer>
        {store => <Observer>{() => children(store)}</Observer>}
    </StoreContext.Consumer>
);
