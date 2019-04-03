import { Button } from '../elements/';
import { ModalWrap, Overlay, Body, Close } from './Styles';

const Modal = props => (
    <ModalWrap>
        {props.overlay ? <Overlay onClick={props.action} /> : null}
        <Body>
            {props.children}
            <Close as={Button} action={props.action}>
                ❌
            </Close>
        </Body>
    </ModalWrap>
);

export default Modal;
