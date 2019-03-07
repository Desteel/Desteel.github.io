import { observer, inject } from "mobx-react";
import { action } from "mobx";
import Cross from "../../icons/cross.svg";
import Pen from "../../icons/pen.svg";
import Check from "../../icons/tick.svg";
import "./Options.scss";

@inject("contentStore")
@observer
class Options extends React.Component {
    @action('delete')
    delete = () => this.props.contentStore.deleteCard(this.props.id);

    @action('edit open')
    editOpen = () => {
        this.props.toggleEditable();
        this.props.fillTemplate();
    };

    @action('edit close')
    editClose = () => {
        this.props.toggleEditable();
		this.props.contentStore.saveCard(this.props.id, this.props.template);        
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
