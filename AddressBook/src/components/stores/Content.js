import { observable, computed, action } from "mobx";
import { log } from "util";

class ContentStore {
    @observable error = null;
    @observable isLoaded = false;
    @observable items = [];

    @action("fetch")
    fetch = () => {
        let jsonUrl = require("../../data/items.json");

        fetch(jsonUrl)
            .then(res => res.json())
            .then(
                result => {
                    this.isLoaded = true;
                    this.items = result.items;
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
    saveCard = (id, obj) => {
        const arrayAfterEdit = this.items.map(item => {
            if (item.id == id) {
                for (let key in item) {
                    if (item[key] !== obj[key]) {
                        item[key] = obj[key]
                    }
                }
            }
        });
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
