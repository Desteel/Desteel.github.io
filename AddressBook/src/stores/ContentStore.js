import { observable, action } from "mobx";
const axios = require("axios");
import { createGuid } from "../utils";

const $dbServer = !PRODUCTION && "http://localhost:3000/items/";
const $dbLocal = PRODUCTION && require("../data/items.json");

class ContentStore {
    @observable error = null;
    @observable isLoaded = false;
    @observable items = [];

    axiosInit = ($url, $data) => {
        axios
            .get($url)
            .then(result => {
                this.isLoaded = true;
                this.items = $data ? result.data[$data] : result.data;
            })
            .catch(error => {
                this.error = error;
                console.error("error", error);
            });
    };

    deleteItem = id => {
        this.items = this.items.filter(item => item.id !== id);
    };
    saveItem = (id, modifiedItem) => {
        this.items = this.items.map(item =>
            item.id === id ? modifiedItem : item
        );
    };
    addItem = idItem => {
        this.items = [...this.items, idItem];
    };

    @action("fetch data")
    getData = () => {
        !PRODUCTION
            ? this.axiosInit($dbServer)
            : this.axiosInit($dbLocal, "items");
    };

    @action("delete card")
    deleteCard = id => {
        !PRODUCTION
            ? axios.delete(`${$dbServer}${id}`).then(result => {
                  this.deleteItem(id);
              })
            : this.deleteItem(id);
    };

    @action("save editable card")
    saveCard = (id, modifiedItem) => {
        !PRODUCTION
            ? axios.put(`${$dbServer}${id}`, modifiedItem).then(result => {
                  this.saveItem(id, modifiedItem);
              })
            : this.saveItem(id, modifiedItem);
    };

    @action("add card")
    addCard = newItem => {
        const itemWithId = { ...newItem, id: createGuid() };
        !PRODUCTION
            ? axios.post($dbServer, itemWithId).then(result => {
                  this.addItem(itemWithId);
              })
            : this.addItem(itemWithId);
    };
}

const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
