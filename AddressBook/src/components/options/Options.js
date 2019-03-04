import { observer, inject } from "mobx-react";
import Cross from "../../icons/cross.svg";
import Pen from "../../icons/pen.svg";
import Check from "../../icons/tick.svg";
import "./Options.scss";
import { log } from "util";

@inject("contentStore")
@observer
class Options extends React.Component {
    delete = () => this.props.contentStore.deleteCard(this.props.id);
    editOpen = () => {
        this.props.toggleEditable();
        this.props.fillTemplate();
    };
    editClose = () => {
		this.props.contentStore.saveCard(this.props.id, this.props.template);
        this.props.toggleEditable();
    };

    render() {		
        const BtnEdit = () => (
            <button onClick={this.editOpen} type="button" className="options__btn" >
                <Pen />
            </button>
        );
        const BtnSave = () => (
            <button onClick={this.editClose} type="button" className="options__btn" >
                <Check />
            </button>
        );
        return (
            <div className="options">
                {this.props.editable ? <BtnSave /> : <BtnEdit />}
                <button onClick={this.delete} type="button" className="options__btn" >
                    <Cross />
                </button>
            </div>
        );
    }
}

export default Options;
