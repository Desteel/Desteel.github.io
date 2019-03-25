import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import ItemForm from "./ItemForm";
import ItemDiv from "./ItemDiv";
import Options from "../options/Options";

@inject("contentStore")
@observer
class Card extends React.Component {
    @observable editable = false;
    @observable template = {
        id: "",
        photoUrl: "",
        name: "",
        surname: "",
        phoneValues: [],
        address: ""
    };

    @action("edit start")
    editStart = () => {
        this.editable = true;
        this.template = { ...this.props.item };
    };

    @action("edit close")
    editClose = () => {
        this.editable = false;
    };

    @action("template edit")
    templateEdit = e => {
        const target = e.target,
            value = target.value,
            name = target.name,
            id = e.target.dataset.id;

        let isArray = Array.isArray(this.template[name]);

        isArray
            ? (this.template[name][id] = value)
            : (this.template[name] = value);


        console.log(this.template);        
    };

    @action("save card")
    saveCard = () => {
        this.editable = false;
        this.props.contentStore.saveCard(this.props.id, this.template);
    };

    @action("delete card")
    deleteCard = () => this.props.contentStore.deleteCard(this.props.id);

    editRender = () => (
        <ItemForm action={this.templateEdit} item={this.props.item}>
            <Options
                editable={this.editable}
                editStart={this.editStart}
                editClose={this.editClose}
                saveCard={this.saveCard}
                deleteCard={this.deleteCard}
            />
        </ItemForm>
    );

    viewRender = () => (
        <ItemDiv item={this.props.item}>
            <Options
                editable={this.editable}
                editStart={this.editStart}
                editClose={this.editClose}
                saveCard={this.saveCard}
                deleteCard={this.deleteCard}
            />
        </ItemDiv>
    );

    render() {
        return this.editable ? this.editRender() : this.viewRender();
    }
}

export default Card;
