import Options from "../options/Options";
import "./Card.scss";
let photoIcon = require("../../images/photo.png");

class Template extends React.Component {
    constructor() {
        super();
        this.state = {
            editable: false
        };
        this.toggleEditable = this.toggleEditable.bind(this);
    }

    toggleEditable() {
        this.setState({
            editable: !this.state.editable
        });
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
						defaultValue={`${name} ${surname}`}
						className="input card__name"
					/>
					<input
						defaultValue={phone}
						className="input card__phone"
					/>
					<input
						defaultValue={address}
						className="input card__address"
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
		const Card = () => {
			const Template = this.state.editable ? Form : Div;
			return <Template></Template>
		}
		return <Card />
    }
}

export default Template;
