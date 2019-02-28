import { observable, computed, action } from "mobx";

class EditStore {
    @observable editable = false;

    @action("toggle editable")
    toggleEditable = () => this.editable = !this.editable

    @action("test")
    test = (index) => console.log(index);
    
}

const editStore = new EditStore();

export default editStore;
export { EditStore };
