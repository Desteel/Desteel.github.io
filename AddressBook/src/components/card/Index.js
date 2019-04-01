import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import ItemForm from './ItemForm';
import ItemDiv from './ItemDiv';
import Options from '../options/Options';

@inject('contentStore')
@observer
class Card extends React.Component {
    @observable editable = false;

    @action('edit card start')
    editStart = () => {
        this.editable = true;
    };

    @action('edit card close')
    editClose = () => {
        this.editable = false;
    };

    @action('delete card')
    deleteCard = () => this.props.contentStore.deleteCard(this.props.id);

    editRender = () => (
        <ItemForm item={this.props.item} editClose={this.editClose}>
            <Options editable={this.editable} editClose={this.editClose} />
        </ItemForm>
    );

    viewRender = () => (
        <ItemDiv item={this.props.item}>
            <Options
                editable={this.editable}
                editStart={this.editStart}
                deleteCard={this.deleteCard}
            />
        </ItemDiv>
    );

    render() {
        return this.editable ? this.editRender() : this.viewRender();
    }
}

export default Card;
