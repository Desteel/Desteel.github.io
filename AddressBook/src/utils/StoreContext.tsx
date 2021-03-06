import React from 'react';
import { Observer } from 'mobx-react';
import searchStore from '../stores/SearchStore';
import { TSearchStore } from '../models/Search';

interface IStores {
    searchStore: TSearchStore;
}

interface IProps {
    children(store: IStores): JSX.Element | null;
}

const stores = {
    searchStore
};

const StoreContext = React.createContext(stores);

export const WithStore: React.FunctionComponent<IProps> = ({ children }) => (
    <StoreContext.Consumer>
        {store => <Observer>{() => children(store)}</Observer>}
    </StoreContext.Consumer>
);

// use
// import { WithStore } from '../../stores/StoreContext';

// export const Elem: React.FunctionComponent = () => (
//     <WithStore>{store => <div>{store.searchStoreTEST.value}</div>}</WithStore>
// );

// return (
//     <Elem />
// )
