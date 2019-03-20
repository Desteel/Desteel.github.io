import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Form from "./CardForm";
import Div from "./CardDiv";
import Options from "../options/Options";

@observer
class Card extends React.Component {
    @observable editable = false;
    @observable template = {
        id: "",
        photoUrl: "",
        name: "",
        surname: "",
        phone: "",
        address: ""
    };

    @action("toggle editable")
    toggleEditable = () => {
        this.editable = !this.editable;
    };

    @action("fill template")
    fillTemplate = () => {
        this.template = { ...this.props.item };
    };

    @action("template edit")
    templateEdit = e => {
        const target = e.target,
            value = target.value,
            name = target.name;

        this.template[name] = value;
    };

    Card = ({ children }) => {
        return this.editable ? (
            <Form action={this.templateEdit} props={this.props.item}>
                {children}
            </Form>
        ) : (
            <Div props={this.props.item}>{children}</Div>
        );
    };

    render() {
        return (
            <this.Card>
                {
                    <Options
                        fillTemplate={this.fillTemplate}
                        template={this.template}
                        editable={this.editable}
                        toggleEditable={this.toggleEditable}
                        id={this.props.id}
                    />
                }
            </this.Card>
        );
    }
}

export default Card;
