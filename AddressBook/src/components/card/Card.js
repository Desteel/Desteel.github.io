import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import Form from "./CardForm";
import Div from "./CardDiv";
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
        phone: [],
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
    };

    @action("save card")
    saveCard = () => {
        this.editable = false;
        this.props.contentStore.saveCard(this.props.id, this.template);
    };

    @action("delete card")
    deleteCard = () => this.props.contentStore.deleteCard(this.props.id);

    toggleMode = ({ children }) =>
        this.editable ? (
            <Form action={this.templateEdit} props={this.props.item}>
                {children}
            </Form>
        ) : (
            <Div props={this.props.item}>{children}</Div>
        );

    render() {
        return (
            <this.toggleMode>
                {
                    <Options
                        editable={this.editable}
                        editStart={this.editStart}
                        editClose={this.editClose}
                        saveCard={this.saveCard}
                        deleteCard={this.deleteCard}
                    />
                }
            </this.toggleMode>
        );
    }
}

export default Card;
