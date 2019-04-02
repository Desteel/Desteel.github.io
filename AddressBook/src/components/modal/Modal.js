import { ModalWrap, Overlay, Body, Close } from './Styles';
import { observer, inject } from 'mobx-react';
import { Button } from '../elements/';
import IconCross from '../../icons/cross.svg';

@inject('modalStore')
@observer
class Modal extends React.Component {
    render() {
        const { isOpen, close, content } = this.props.modalStore;

        if (isOpen) {
            return (
                <ModalWrap>
                    <Overlay onClick={close} />
                    <Body>
                        <div>{content}</div>
                        <Close as={Button} action={close}>
                            {<IconCross />}
                        </Close>
                    </Body>
                </ModalWrap>
            );
        } else {
            return null;
        }
    }
}

export default Modal;
