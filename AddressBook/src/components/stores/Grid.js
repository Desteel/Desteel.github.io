import { observable, computed, action } from "mobx";

class GridStore {
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
}

const gridStore = new GridStore();

export default gridStore;
export { GridStore };
