import { observable, computed, action } from "mobx";

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

    @action("delete")
    delete = id => {
        const arrayAfterDel = this.items.filter(item => item.id !== id);
        this.items = arrayAfterDel;
    };
	
	@action("edit")
	edit = id => {
		const arrayAfterEdit = this.items.map(item => {
			if (item.id == id) {
				//let editCard = new CardTemplate(item.id);
				//console.log(item);
			}
		});
	}
}


const contentStore = new ContentStore();

export default contentStore;
export { ContentStore };
