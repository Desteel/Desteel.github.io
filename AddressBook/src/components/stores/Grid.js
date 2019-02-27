import { observable, computed, action } from "mobx";

class GridStore {
    @observable error = null;
    @observable isLoaded = false;
    @observable items = [];

    @action("fetch")
    fetch = () => {
        fetch("./items.json")
            .then(res => res.json())
            .then(
                result => {
                    this.isLoaded = true;
                    this.items = result.items;
                    console.log(this.items);
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
