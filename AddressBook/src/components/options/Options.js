import { OptionsBox, Btn } from "./StyledOptions";
import { observer, inject } from "mobx-react";
import { action } from "mobx";
import IconCross from "../../icons/cross.svg";
import IconPen from "../../icons/pen.svg";
import IconCheck from "../../icons/tick.svg";

@inject("contentStore")
@observer
class Options extends React.Component {
    ToggleOptions = () =>
        this.props.editable ? (
            <React.Fragment>
                <Btn action={this.props.saveCard}>{<IconCheck />}</Btn>
                <Btn action={this.props.editClose}>{"exit"}</Btn>
            </React.Fragment>
        ) : (
            <React.Fragment>
                <Btn action={this.props.editStart}>{<IconPen />}</Btn>
                <Btn action={this.props.deleteCard}>{<IconCross />}</Btn>
            </React.Fragment>
        );

    render() {
        return <OptionsBox>{<this.ToggleOptions />}</OptionsBox>;
    }
}

export default Options;
