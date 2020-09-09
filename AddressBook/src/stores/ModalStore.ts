import { ObservableMap, observable, action } from 'mobx';
import { createGuid } from '../utils/utils';

class ModalStore {
    @observable modals: ObservableMap<string> = observable.map();
    @observable isOpen: boolean = false;

    @action('add modal')
    addModal = (component: Function) => {
        const id = createGuid();
        this.modals.set(id, component);
    };

    @action('delete modal')
    deleteModal = (id: string) => {
        this.modals.delete(id);
    };
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
