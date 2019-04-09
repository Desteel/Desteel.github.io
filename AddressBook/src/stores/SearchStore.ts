import { observable, computed, action } from 'mobx';

class SearchStore {
    @observable value: string = "";

    @computed get isActive() {
        return this.value.length > 0
            ? true
            : false
    }

    @action('clear input')
    clearInput = () => {        
        this.value = "";
    }
}

const searchStore = new SearchStore();

export default searchStore;
export { SearchStore };