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

    // @computed get isLoaded() {
    //     console.log(this.isLoaded);
    // }

    // @computed get isActive() {
    //     return this.value.length > 0
    //         ? true
    //         : false
    // }

    // @action('clear input')
    // clearInput = () => {
    //     this.value = "";
    // }
}

const gridStore = new GridStore();

export default gridStore;
export { GridStore };
