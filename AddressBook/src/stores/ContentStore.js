import { observable, action } from 'mobx';
const axios = require('axios');
import { createGuid } from '../utils';

const $url = 'http://localhost:3000/items/';

class ContentStore {
    @observable error = null;
    @observable isLoaded = false;
    @observable items = [];

    @action('fetch data')
    fetchData = () => {
        axios
            .get($url)
            .then(result => {
                this.isLoaded = true;
                this.items = result.data;
            })
            .catch(error => {
                this.error = error;
                console.error('error', error);
            });
    };

    @action('delete card')
    deleteCard = id => {
        axios.delete(`${$url}${id}`).then(result => {
            this.items = this.items.filter(item => item.id !== id);
        });
    };

    @action('save editable card')
    saveCard = (id, newItem) => {
        axios.put(`${$url}${id}`, newItem).then(result => {
            this.items = this.items.map(item =>
                item.id === id ? newItem : item
            );
        });
    };

    @action('add card')
    addCard = newItem => {
        const itemWithId = { ...newItem, id: createGuid() };
        axios.post($url, itemWithId).then(result => {
            this.items = [...this.items, itemWithId];
        });
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
