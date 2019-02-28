import { observable, computed, action } from "mobx";

class EditStore {
    @observable editable = false;
}

const editStore = new EditStore();

export default editStore;
export { EditStore };
