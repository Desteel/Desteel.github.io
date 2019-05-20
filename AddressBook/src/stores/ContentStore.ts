/// <reference path="../globals.d.ts" />
import { observable, action } from 'mobx';
const axios = require('axios');
import { TCardItem } from '../containers/card/types';
import { createGuid } from '../utils';

const $dbServer: string = 'http://localhost:3000/items/';
const $dbLocal: boolean | string = PRODUCTION && require('../data/items.json');

interface TResultServer {
    data: Array<TCardItem>;
}
interface TResultLocal {
    data: {
        items: Array<TCardItem>;
    };
}

const isResultB = (
    result: TResultServer | TResultLocal
): result is TResultLocal => (<TResultLocal>result).data.items !== undefined;

class ContentStore {
    @observable error?: string;
    @observable isLoaded: boolean = false;
    @observable items: Array<TCardItem> = [];

    axiosInit = ($url: string) => {
        axios
            .get($url)
            .then((result: TResultServer | TResultLocal) => {
                this.isLoaded = true;
                this.items = isResultB(result)
                    ? result.data.items
                    : result.data;
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
        !PRODUCTION ? this.axiosInit($dbServer) : this.axiosInit($dbLocal);
    };

    @action('delete card')
    deleteCard = (id: string) => {
        !PRODUCTION
            ? axios
                  .delete(`${$dbServer}${id}`)
                  .then((result: TResultServer) => {
                      this.deleteItem(id);
                  })
            : this.deleteItem(id);
    };

    @action('save editable card')
    saveCard = (modifiedItem: TCardItem) => {
        !PRODUCTION
            ? axios
                  .put(`${$dbServer}${modifiedItem.id}`, modifiedItem)
                  .then((result: TResultServer) => {
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
                  .then((result: TResultServer) => {
                      this.addItem(itemWithId);
                  })
            : this.addItem(itemWithId);
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
