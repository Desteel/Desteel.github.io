import { observer, inject } from 'mobx-react';
import { action } from 'mobx';
import CardForm from '../../components/form/CardForm';

@inject('contentStore', 'modalStore')
@observer
class ItemForm extends React.Component {
    @action('save card')
    saveCard = data => {
        this.props.contentStore.saveCard(this.props.item.id, data);
        this.props.editClose();
        // this.props.modalStore.isOpen = false;
    };

    render() {
        return (
            <CardForm onSubmit={this.saveCard} initialValues={this.props.item}>
                {this.props.children}
            </CardForm>
        );
    }
}

export default ItemForm;
