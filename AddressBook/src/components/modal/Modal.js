import { observer, inject } from "mobx-react";

@inject("modalStore")
@observer
class Modal extends React.Component {
    render() {
        const { close } = this.props.modalStore;
        
        return <div />;
    }
}

export default Modal;
