import { observer, inject } from "mobx-react";
import "./Options.scss";

import Cross from '../../icons/cross.svg'
import Pen from '../../icons/pen.svg'
import Check from '../../icons/tick.svg'

@inject("contentStore")
@observer
class Options extends React.Component {
	delete = () => this.props.contentStore.delete(this.props.id);
	edit = () => this.props.contentStore.edit(this.props.id);
	
    render() {
        return (
            <div className="options">
                <button onClick={this.props.toggleEditable} type="button" className="options__btn">
					{
						this.props.editable
							? <Check />
							: <Pen />
					}                    
                </button>
                <button onClick={this.delete} type="button" className="options__btn">
                    <Cross />
                </button>
            </div>
        ); 
    }
}

export default Options;
