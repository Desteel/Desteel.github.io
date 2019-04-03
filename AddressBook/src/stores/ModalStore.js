import { observable, action, asMap } from 'mobx';
import { createGuid } from '../utils';

class ModalStore {
    @observable modals = observable.map();
    @observable overlayIsActive = false;

    @action('add modal')
    addModal = component => {
        const id = createGuid();
        this.modals.set(id, component);
    };

    @action('delete modal')
    deleteModal = id => {
        this.modals.delete(id);
    };
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
