import { observable, computed, action } from "mobx";

class EditStore {
    @observable editable = false;

    @action("toggle editable")
    toggleEditable = () => this.editable = !this.editable
}

const editStore = new EditStore();

export default editStore;
export { EditStore };
