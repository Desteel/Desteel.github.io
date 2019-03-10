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
        const arrayAfterDel = this.items.filter(item => item.id !== id);
        this.items = arrayAfterDel;
    };

    @action("save card")
    saveCard = (id, newItem) => {   
        const arrayAfterEdit = this.items.map(item => 
            item.id == id
                ? newItem
                : item
        );        
        
        this.items = arrayAfterEdit;
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
