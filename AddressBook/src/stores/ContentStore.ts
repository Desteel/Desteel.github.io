/// <reference path="../globals.d.ts" />
import { observable, action } from 'mobx';
const axios = require('axios');
import { TCardItem } from '../containers/card/types';
import { createGuid } from '../utils';

const $dbServer: boolean | string =
    !PRODUCTION && 'http://localhost:3000/items/';
const $dbLocal: boolean | string = PRODUCTION && require('../data/items.json');

// type TData = {
//     [key: string]: any;
// };
type TResult = {
    data: Array<TCardItem>;
};

class ContentStore {
    @observable error?: string;
    @observable isLoaded: boolean = false;
    @observable items: Array<TCardItem> = [];

    axiosInit = ($url: string | boolean, $key?: string) => {
        axios
            .get($url)
            .then((result: TResult) => {
                this.isLoaded = true;
                this.items = $key ? result.data[$key] : result.data;
            })
            .catch((error: string) => {
                this.error = error;
                console.error('error', error);
            });
    };

    deleteItem = (id: string) => {
        this.items = this.items.filter(item => item.id !== id);
    };
    saveItem = (modifiedItem: TCardItem) => {
        this.items = this.items.map(item =>
            item.id === modifiedItem.id ? modifiedItem : item
        );
    };
    addItem = (idItem: TCardItem) => {
        this.items = [...this.items, idItem];
    };

    @action('fetch data')
    getData = () => {
        !PRODUCTION
            ? this.axiosInit($dbServer)
            : this.axiosInit($dbLocal, 'items');
    };

    @action('delete card')
    deleteCard = (id: string) => {
        !PRODUCTION
            ? axios
                  .delete(`${$dbServer}${id}`)
                  .then((result: { data: object }) => {
                      this.deleteItem(id);
                  })
            : this.deleteItem(id);
    };

    @action('save editable card')
    saveCard = (modifiedItem: TCardItem) => {
        !PRODUCTION
            ? axios
                  .put(`${$dbServer}${modifiedItem.id}`, modifiedItem)
                  .then((result: { data: object }) => {
                      this.saveItem(modifiedItem);
                  })
            : this.saveItem(modifiedItem);
    };

    @action('add card')
    addCard = (newItem: TCardItem) => {
        const itemWithId = { ...newItem, id: createGuid() };
        !PRODUCTION
            ? axios
                  .post($dbServer, itemWithId)
                  .then((result: { data: object }) => {
                      this.addItem(itemWithId);
                  })
            : this.addItem(itemWithId);
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
