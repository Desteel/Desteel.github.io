/// <reference path="../globals.d.ts" />
import { observable, action } from 'mobx';
import axios from 'axios';
import { TCardItem } from '../types/';
import { createGuid } from '../utils/utils';

const $dbServer: string = 'http://localhost:3000/items/';
const $dbLocal: boolean | string = PRODUCTION && require('../data/items.json');

interface IResultServer {
    data: Array<TCardItem>;
}
interface IResultLocal {
    data: {
        items: Array<TCardItem>;
    };
}

const isLocalResult = (
    result: IResultServer | IResultLocal
): result is IResultLocal => (<IResultLocal>result).data.items !== undefined;

const isLocalDb = (db: boolean | string): db is string =>
    typeof (<string>db) !== 'boolean';

class ContentStore {
    @observable error?: string;
    @observable isLoaded: boolean = false;
    @observable items: Array<TCardItem> = [];

    axiosInit = ($url: string) => {
        axios
            .get($url)
            .then((result: IResultServer | IResultLocal) => {
                this.isLoaded = true;
                this.items = isLocalResult(result)
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
        isLocalDb($dbLocal)
            ? this.axiosInit($dbLocal)
            : this.axiosInit($dbServer);
    };

    @action('delete card')
    deleteCard = (id: string) => {
        !PRODUCTION
            ? axios
                  .delete(`${$dbServer}${id}`)
                  .then((result: IResultServer) => {
                      this.deleteItem(id);
                  })
            : this.deleteItem(id);
    };

    @action('save editable card')
    saveCard = (modifiedItem: TCardItem) => {
        !PRODUCTION
            ? axios
                  .put(`${$dbServer}${modifiedItem.id}`, modifiedItem)
                  .then((result: IResultServer) => {
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
                  .then((result: IResultServer) => {
                      this.addItem(itemWithId);
                  })
            : this.addItem(itemWithId);
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
