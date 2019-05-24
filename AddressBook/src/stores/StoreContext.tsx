import React from 'react';
import { Observer } from 'mobx-react';
import searchStore from '../stores/SearchStore';
import { TSearchStore } from '../models/Search';

import searchStoreTEST from '../stores/SearchStoreTEST';

interface IStores {
    searchStore: TSearchStore;
    searchStoreTEST: TSearchStore;
}

interface IProps {
    children(store: IStores): JSX.Element | null;
}

const stores = {
    searchStore,
    searchStoreTEST
};

const StoreContext = React.createContext(stores);

export const WithStore: React.FunctionComponent<IProps> = ({ children }) => (
    <StoreContext.Consumer>
        {store => <Observer>{() => children(store)}</Observer>}
    </StoreContext.Consumer>
);

// use
// import { WithStore } from '../../stores/StoreContext';

// export const AddBook: React.FunctionComponent = () => (
//     <WithStore>{store => <div>{store.searchStoreTEST.value}</div>}</WithStore>
// );

// return (
//     <AddBook />
// )