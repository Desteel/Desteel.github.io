/// <reference path="../globals.d.ts" />
import { observable, action } from 'mobx';
const axios = require('axios');
import { TCardItem } from '../containers/card/types';
import { createGuid } from '../utils';

const $dbServer: string = 'http://localhost:3000/items/';
const $dbLocal: string = require('../data/items.json');

interface TResultA {
    data: Array<TCardItem>;
}
interface TResultB {
    data: {
        items: Array<TCardItem>;
    };
}

const isResultA = (result: TResultA | TResultB): result is TResultB =>
    (<TResultB>result).data.items !== undefined;

class ContentStore {
    @observable error?: string;
    @observable isLoaded: boolean = false;
    @observable items: Array<TCardItem> = [];

    axiosInit = ($url: string) => {
        axios
            .get($url)
            .then((result: TResultA | TResultB) => {
                this.isLoaded = true;
                this.items = !isResultA(result)
                    ? result.data
                    : result.data.items;
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
            : this.axiosInit($dbLocal);
    };

    @action('delete card')
    deleteCard = (id: string) => {
        !PRODUCTION
            ? axios.delete(`${$dbServer}${id}`).then((result: TResultA) => {
                  this.deleteItem(id);
              })
            : this.deleteItem(id);
    };

    @action('save editable card')
    saveCard = (modifiedItem: TCardItem) => {
        !PRODUCTION
            ? axios
                  .put(`${$dbServer}${modifiedItem.id}`, modifiedItem)
                  .then((result: TResultA) => {
                      this.saveItem(modifiedItem);
                  })
            : this.saveItem(modifiedItem);
    };

    @action('add card')
    addCard = (newItem: TCardItem) => {
        const itemWithId = { ...newItem, id: createGuid() };
        !PRODUCTION
            ? axios.post($dbServer, itemWithId).then((result: TResultA) => {
                  this.addItem(itemWithId);
              })
            : this.addItem(itemWithId);
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
