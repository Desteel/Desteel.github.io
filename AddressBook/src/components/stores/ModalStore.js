import { observable, action } from "mobx";

class ModalStore {
    @observable open = false;

    @action("close")
    close = () => {
       this.open = false
    };

    @action("open")
    open = () => {
       this.open = true    
    };
}

const modalStore = new ModalStore();

export default modalStore;
export { ModalStore };
