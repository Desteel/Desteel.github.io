import { observer, inject } from "mobx-react";
import { action } from "mobx";
import Button from "./Button";
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

    @action('edit save')
    editSave = () => {
        this.props.toggleEditable();
        this.props.contentStore.saveCard(this.props.id, this.props.template);
    };

    ToggleOptions = () => {
        if (this.props.editable) {
            return (
                <React.Fragment>
                    <Button action={this.editSave}>{<Check />}</Button>
                    <Button action={this.props.toggleEditable}>{"exit"}</Button>
                </React.Fragment>
            )          
        } else {
            return (
                <React.Fragment>
                    <Button action={this.editOpen}>{<Pen />}</Button>
                    <Button action={this.delete}>{<Cross />}</Button>
                </React.Fragment>
            )   
        }
    }

    render() {        
        return (            
            <div className="options">
                {<this.ToggleOptions/>}                
            </div>
        );
    }
}

export default Options;
