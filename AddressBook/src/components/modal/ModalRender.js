import { action } from 'mobx';
import { observer, inject } from 'mobx-react';

@inject('modalStore')
@observer
class ModalRender extends React.Component {
    @action('remove modal')
    removeModal = id => () => {
        this.props.modalStore.deleteModal(id);
    };

    render() {
        return [...this.props.modalStore.modals.entries()].map(
            ([id, modal]) => (
                <React.Fragment key={id}>
                    {modal(this.removeModal(id))}
                </React.Fragment>
            )
        );
    }
}

export default ModalRender;
