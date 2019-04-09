import { observable, action } from 'mobx';
const axios = require('axios');
import { TCardItem } from '../containers/card/types';
import { createGuid } from '../utils';

const $dbServer = !PRODUCTION && 'http://localhost:3000/items/';
const $dbLocal = PRODUCTION && require('../data/items.json');

class ContentStore {
    @observable error: string = null;
    @observable isLoaded: boolean = false;
    @observable items: Array<TCardItem> = [];

    axiosInit = ($url: string, $data: string = null) => {
        axios
            .get($url)
            .then((result: { data: object }) => {                
                this.isLoaded = true;
                this.items = $data ? result.data[$data] : result.data;
            })
            .catch((error: string) => {
                this.error = error;
                console.error('error', error);
            });
    };

    deleteItem = (id: string) => {
        this.items = this.items.filter(item => item.id !== id);
    };
    saveItem = (id: string, modifiedItem: object) => {     
        this.items = this.items.map(item =>
            item.id === id ? modifiedItem : item
        );
    };
    addItem = (idItem: object) => {
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
    saveCard = (id: string, modifiedItem: object) => {
        !PRODUCTION
            ? axios
                  .put(`${$dbServer}${id}`, modifiedItem)
                  .then((result: { data: object }) => {
                      this.saveItem(id, modifiedItem);
                  })
            : this.saveItem(id, modifiedItem);
    };

    @action('add card')
    addCard = (newItem: object) => {
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
