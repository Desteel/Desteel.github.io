import { action } from 'mobx';
import { observer, inject } from 'mobx-react';
import Modal from '../../components/modal/Modal.js';
import { Button } from '../../components/elements/';

@inject('modalStore')
@observer
class HocModal extends React.Component {
    ModalWithContent = close => (
        <Modal action={close} overlay={this.props.overlay}>
            {this.props.content}
        </Modal>
    );

    @action('add modal with content')
    addModal = () => {
        this.props.modalStore.addModal(this.ModalWithContent);
    };

    render() {
        return (
            <Button action={this.addModal} className={this.props.className}>
                {this.props.text}
            </Button>
        );
    }
}

export default HocModal;
