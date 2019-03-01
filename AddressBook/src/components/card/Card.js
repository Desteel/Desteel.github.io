import { observer, inject } from "mobx-react";
import Options from "../options/Options";

import "./Card.scss";

let photoIcon = require("../../images/photo.png");

class Template extends React.Component {
	constructor() {
        super()		
		
        this.state = {
            editable: false
        }		
		
		this.toggleEditable = this.toggleEditable.bind(this)
    }
	
	toggleEditable () {
		this.setState({
			editable: !this.state.editable
		})
	}
	
    render() {		
        const data = this.props.item,
            setPhoto = data.photoUrl ? data.photoUrl : photoIcon;       

        if (this.state.editable) {
            return (
                <form className="card">
                    <div className="card__imagebox">
                        <img src={setPhoto} />
                    </div>
                    <div className="card__main">
                        <input defaultValue={`${data.name} ${data.surname}`} className="card__name"/>
                        <input defaultValue={data.phone} className="card__phone"/>
                        <input defaultValue={data.address} className="card__address"/>
                    </div>
                    <Options toggleEditable={this.toggleEditable} />
                </form>
            );
        }
        return (
            <div className="card">
                <div className="card__imagebox">
                    <img src={setPhoto} />
                </div>
                <div className="card__main">
                    <div className="card__name">
                        {`${data.name} ${data.surname}`}
                    </div>
                    <div className="card__phone">{data.phone}</div>
                    <div className="card__address">{data.address}</div>
                </div>
                <Options toggleEditable={this.toggleEditable} />
            </div>
        );
        
    }
}

export default Template;
