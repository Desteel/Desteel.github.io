import Options from "../options/Options";
import ElemInput from "./ElemInput";
import "./Card.scss";
let photoIcon = require("../../images/photo.png");

class Template extends React.Component {
    constructor() {
        super();
        this.state = {
            editable: false,
            template: {}
        };
    }

    toggleEditable = () => {
        this.setState({
            editable: !this.state.editable
        });       
    };

    fillTemplate = () => {
        const fillTemplate = {};
        for (let key in this.props.item) {
            fillTemplate[key] = this.props.item[key];
        }
        this.setState({
            template: fillTemplate
        });
    };

    templateEdit = (e, type) => {
        this.state.template[type] = e.target.value
        console.log(this.state.template);
    };

    render() {
        const { photoUrl, name, surname, phone, address } = this.props.item,
            setPhoto = photoUrl ? photoUrl : photoIcon;        

        const OptionsTemplate = () => (
            <Options
                fillTemplate={this.fillTemplate}
                template={this.state.template}
                editable={this.state.editable}
                toggleEditable={this.toggleEditable}
                id={this.props.id}
            />
        );
        const Form = () => (
            <form className="card">
                <div className="card__imagebox">
                    <img src={setPhoto} />
                </div>
                <div className="card__main">
                    <ElemInput templateEdit={this.templateEdit} value={name} cath={"name"} />
                    <ElemInput templateEdit={this.templateEdit} value={surname} cath={"surname"} />
                    <ElemInput templateEdit={this.templateEdit} value={phone} cath={"phone"} />
                    <ElemInput templateEdit={this.templateEdit} value={address} cath={"address"} />
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
                    <div className="card__name">{`${name} ${surname}`}</div>
                    <div className="card__phone">{phone}</div>
                    <div className="card__address">{address}</div>
                </div>
                <OptionsTemplate />
            </div>
        );
        return (
            <React.Fragment>
                {this.state.editable ? <Form /> : <Div />}
            </React.Fragment>
        );
    }
}

export default Template;
