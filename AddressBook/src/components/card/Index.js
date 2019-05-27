import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import CardForm from '../../components/form/CardForm';
import ViewStatic from './ViewStatic';
import Options from '../options/Options';

@inject('contentStore')
@observer
class Card extends React.Component {
    @observable editable = false;

    @action('toggle card editable')
    toggleEditable = () => {
        this.editable = !this.editable;
    };

    @action('save card')
    handleSave = data => {
        this.props.contentStore.saveCard(data);
        this.editable = false;
    };

    @action('delete card')
    handleDelete = () => this.props.contentStore.deleteCard(this.props.id);

    viewEdit = () => (
        <CardForm onSubmit={this.handleSave} initialValues={this.props.item}>
            <Options editable={this.editable} editClose={this.toggleEditable} />
        </CardForm>
    );

    viewStatic = () => (
        <ViewStatic item={this.props.item}>
            <Options
                editable={this.editable}
                editStart={this.toggleEditable}
                deleteCard={this.handleDelete}
            />
        </ViewStatic>
    );

    render() {
        return this.editable ? this.viewEdit() : this.viewStatic();
    }
}

export default Card;
