import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import CardForm from "../../components/form/CardForm";
import ItemDiv from "./ItemDiv";
import Options from "../options/Options";

@inject("contentStore", "modalStore")
@observer
class Card extends React.Component {
    @observable editable = false;

    @action("toggle card editable")
    toggleEditable = () => {
        this.editable = !this.editable;
        console.log(this.editable);
    };

    @action("save card")
    saveCard = data => {
        this.props.contentStore.saveCard(data);
        this.editable = false;
        // this.props.modalStore.isOpen = false;
    };

    @action("delete card")
    deleteCard = () => this.props.contentStore.deleteCard(this.props.id);

    editRender = () => (
        <CardForm
            onSubmit={this.saveCard}
            initialValues={{ ...this.props.item }}
        >
            <Options editable={this.editable} editClose={this.toggleEditable} />
        </CardForm>
    );

    viewRender = () => (
        <ItemDiv item={this.props.item}>
            <Options
                editable={this.editable}
                editStart={this.toggleEditable}
                deleteCard={this.deleteCard}
            />
        </ItemDiv>
    );

    render() {
        return this.editable ? this.editRender() : this.viewRender();
    }
}

export default Card;
