import Options from "../options/Options";
import InputElem from "./InputElem";
import EditTemplate from "./EditTemplate";
import "./Card.scss";
let photoIcon = require("../../images/photo.png");

class Template extends React.Component {
    constructor() {
        super();
        this.state = {
            editable: false,
			editTemplate: {
				id: "",
				photoUrl: "",
				name: "",
				surnam: "",
				phone: "",
				address: ""
			}
        };
    }

    toggleEditable = () => {
        this.setState({
            editable: !this.state.editable
        });
    }
	
	edit = (type, e) => {
		let _editTemplate = this.state.editTemplate;
		_editTemplate[type] = e.target.value;
		console.log(_editTemplate);
		this.setState({
			editTemplate: _editTemplate
		});
		
		console.log(_editTemplate)
	}

    render() {
		const { photoUrl, name, surname, phone, address } = this.props.item,
            setPhoto = photoUrl ? photoUrl : photoIcon;
			
		const OptionsTemplate = () => (
			<Options editable={this.state.editable} toggleEditable={this.toggleEditable} id={this.props.id} />
		);
		const Form = () => (
			<form className="card">
				<div className="card__imagebox">
					<img src={setPhoto} />
				</div>
				<div className="card__main">
					<input
						value={name}
						className="input card__name"
						onChange={(e) => this.edit("name", e)}
					/><input
						value={surname}
						className="input card__name"
						onChange={(e) => this.edit("surname", e)}
					/>
					<input
						value={phone}
						className="input card__phone"
						onChange={(e) => this.edit("phone", e)}
					/>
					<input
						value={address}
						className="input card__address"
						onChange={(e) => this.edit("address", e)}
					/>
				</div>
				<OptionsTemplate />
			</form>
		);
		const Div = () => (
			<div className="card">
                <div className="card__imagebox">
                    <img src={setPhoto} />
                </div>
                <div className="card__main">
                    <div className="card__name">
                        {`${name} ${surname}`}
                    </div>
                    <div className="card__phone">{phone}</div>
                    <div className="card__address">{address}</div>
                </div>
				<OptionsTemplate />
            </div>
		);
		return (
			<React.Fragment>
				{
					this.state.editable
						? <Form />
						: <Div />
				}
			</React.Fragment>
		)
    }
}

export default Template;
