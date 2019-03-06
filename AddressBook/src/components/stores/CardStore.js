import { observable, computed, action } from 'mobx';

class CardStore {
    @observable editable = false;
    @observable item = {};    
    @observable template = {};    

    @action("toggle editable")
    toggleEditable = () => {
        this.editable = !this.editable
    };

    @action("fill template")
    fillTemplate = () => {
        const fillTemplate = {};
        for (let key in this.props.item) {
            fillTemplate[key] = this.props.item[key];
        }
        this.template = fillTemplate;
    };

    @action("template edit")
    templateEdit = (e, type) => {
        this.template[type] = e.target.value
    };
}

const cardStore = new CardStore();

export default cardStore;
export { CardStore };