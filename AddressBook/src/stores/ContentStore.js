import { observable, action } from "mobx";
const axios = require("axios");

class ContentStore {
    @observable error = null;
    @observable isLoaded = false;
    @observable items = [];

    @action("fetch data")
    fetchData = () => {
        axios
            .get("http://localhost:3000/items")
            .then(result => {
                this.isLoaded = true;
                this.items = result.data;
            })
            .catch(error => {
                this.error = error;
                console.error("error", error);
            });
    };

    @action("delete card")
    deleteCard = id => {
        axios.delete(`http://localhost:3000/items/${id}`).then(result => {
            this.items = this.items.filter(item => item.id !== id);
        });
    };

    @action("save editable card")
    saveCard = (id, newItem) => {
        axios.put(`http://localhost:3000/items/${id}`, newItem).then(result => {
            this.items = this.items.map(item =>
                item.id === id ? newItem : item
            );
        });
    };

    @action("add card")
    addCard = newItem => {
        axios.post("http://localhost:3000/items/", newItem).then(result => {
            this.items = [...this.items, newItem];
        });
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
