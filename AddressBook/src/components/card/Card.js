import { observable, action } from "mobx";
import { observer } from "mobx-react";
import { Form, Div } from "./CardStates";
import Options from "../options/Options";
import "./Card.scss";

@observer
class Template extends React.Component {
    @observable editable = false;
    @observable template = {};

    @action("toggle editable")
    toggleEditable = () => {
        this.editable = !this.editable;
    };

    @action("fill template")
    fillTemplate = () => {
        this.template = { ...this.props.item };
    };

    @action("template edit")
    templateEdit = (e, type) => {
        this.template[type] = e.target.value;
    };

    ToggleStates = ({ children }) => {
        if (this.editable) {
            return (
                <Form action={this.templateEdit} props={this.props.item}>{children}</Form>
            )
        } else {
            return (
                <Div props={this.props.item}>{children}</Div>
            )
        }
    }

    render() {
        return (
            <this.ToggleStates>
                {<Options
                    fillTemplate={this.fillTemplate}
                    template={this.template}
                    editable={this.editable}
                    toggleEditable={this.toggleEditable}
                    id={this.props.id}
                />}
            </this.ToggleStates>
        );
    }
}

export default Template;
