import styled from "styled-components";
import { observer, inject } from "mobx-react";
import Button from "../button/Button";
import IconCross from "../../icons/cross.svg";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    overflow: auto;
    z-index: 999;
    background-color: rgba(0, 0, 0, 0.8);
`;
const Body = styled.div`    
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    margin: 20px auto;
    background-color: #fff;
    max-width: 900px;
`;

@inject("modalStore")
@observer
class Modal extends React.Component {
    render() {
        const { isOpen, close, content } = this.props.modalStore;

        if (isOpen) {
            return (
                <Overlay onClick={close}>
                    <Body>
                        <div>{content}</div>
                        <Button action={close}>{<IconCross />}</Button>
                    </Body>
                </Overlay>
            );
        } else {
            return null;
        }
    }
}

export default Modal;
