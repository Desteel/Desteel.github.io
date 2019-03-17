import { observable, action } from "mobx";
const axios = require('axios');

class ContentStore {
    @observable error = null;
    @observable isLoaded = false;
    @observable items = [];

    @action("fetch data")
    fetchData = () => {
        axios.get("http://localhost:3000/items")
            .then(result => {
                this.isLoaded = true;
                this.items = result.data;
            })
            .catch(error => {
                this.error = error;
                console.error("Request error", error);
            });
    };

    @action("delete card")
    deleteCard = id => {
        this.items = this.items.filter(item => item.id !== id);
        axios.delete(`http://localhost:3000/items/${id}`);
    };

    @action("save card")
    saveCard = (id, newItem) => {
        this.items = this.items.map(item => item.id === id ? newItem : item);
        axios.put(`http://localhost:3000/items/${id}`, newItem);
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
