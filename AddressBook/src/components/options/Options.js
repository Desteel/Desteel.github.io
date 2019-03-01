import { observer, inject } from "mobx-react";
import "./Options.scss";

import Cross from '../../icons/cross.svg'
import Pen from '../../icons/pen.svg'

@inject("contentStore")
@observer
class Options extends React.Component {
    render() {
        return (
            <div className="options">
                <button onClick={this.props.toggleEditable} type="button" className="options__btn">
                    <Pen />
                </button>
                <button onClick={() => this.props.contentStore.delete(this.props.id)} type="button" className="options__btn">
                    <Cross />
                </button>
            </div>
        ); 
    }
}

export default Options;
