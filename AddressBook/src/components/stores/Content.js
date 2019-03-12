import { observable, action } from "mobx";

class ContentStore {
    @observable error = null;
    @observable isLoaded = false;
    @observable items = [];

    @action("fetch")
    fetch = () => {
        fetch("http://localhost:3000/items")
            .then(res => res.json())
            .then(
                result => {
                    this.isLoaded = true;
                    this.items = result;
                },
                error => {
                    this.error = error;
                    console.error("Request error", error);
                }
            );
    };

    @action("delete card")
    deleteCard = id => {
        this.items = this.items.filter(item => item.id !== id);
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'DELETE'
        });
    };

    @action("save card")
    saveCard = (id, newItem) => {        
        this.items = this.items.map(item => item.id === id ? newItem : item);
        fetch(`http://localhost:3000/items/${id}`, {
            method: 'PUT',
            body: JSON.stringify(newItem),
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        });
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
