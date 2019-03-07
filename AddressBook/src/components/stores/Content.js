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

    @action("edit")
    saveCard = (id, obj, oldObj) => { 
        const arrayAfterEdit = this.items.map(item => 
            item.id == id
                ? obj
                : item
        
            // if (item.id === id) {                
            //     for (let key in item) {
            //         if (item[key] !== obj[key]) {
            //             item[key] = obj[key];
            //         }
            //     }
            // }
        );
        this.items = arrayAfterEdit;        
        console.log(arrayAfterEdit);
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
