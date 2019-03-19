import { observable, action } from "mobx";

class ModalStore {
    @observable isOpen = false;
    @observable content = null;

    @action("close modal")
    close = () => {
        this.isOpen = false;
    };

    @action("init modal")
    init = (content) => {
        this.isOpen = true;
        this.content = content;
    };
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
