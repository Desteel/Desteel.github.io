import { observable, computed, action } from 'mobx';

class GridStore {
    // @observable value = "";

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