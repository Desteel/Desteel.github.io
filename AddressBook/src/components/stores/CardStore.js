import { observable, computed, action } from 'mobx';

class CardStore {
    @observable editable = false;

    @action("toggle editable")
    toggleEditable = () => {
        this.editable = !this.editable     
    };
}

const cardStore = new CardStore();

export default cardStore;
export { CardStore };