import { observer, inject } from "mobx-react";
import Button from "../button/Button";
import IconCross from "../../icons/cross.svg";

@inject("modalStore")
@observer
class Modal extends React.Component {
    render() {
        const { isOpen, close, content } = this.props.modalStore;        

        if (isOpen) {
            return (
                <div>
                    <div>{content}</div>
                    <Button action={close}>{<IconCross/>}</Button>
                </div>
            );
        } else {
            return null;
        }
    }
}

export default Modal;
