import { observable, action } from "mobx";

class ModalStore {
    @observable isOpen = false;
    @observable content = null;

    @action("close")
    close = () => {
        this.isOpen = false;
    };

    @action("init")
    init = (content) => {
        this.isOpen = true;
        this.content = content;
    };
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
