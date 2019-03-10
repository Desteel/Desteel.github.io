import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import Options from "../options/Options";
import ElemInput from "./ElemInput";
import "./Card.scss";
let photoIcon = require("../../images/photo.png");

@observer
class Template extends React.Component {
    @observable editable = false;
    @observable template = {};

    @action("toggle editable")
    toggleEditable = () => {
        this.editable = !this.editable;
    };

    @action("fill template")
    fillTemplate = () => {
        this.template = { ...this.props.item };
    };

    @action("template edit")
    templateEdit = (e, type) => {
        this.template[type] = e.target.value;
    };

    render() {
        const { photoUrl, name, surname, phone, address } = this.props.item,
            setPhoto = photoUrl ? photoUrl : photoIcon;

        const Form = () => (
            <form className="card">
                <div className="card__imagebox">
                    <img src={setPhoto} />
                </div>
                <div className="card__main">
                    <ElemInput
                        templateEdit={this.templateEdit}
                        value={name}
                        cath={"name"}
                    />
                    <ElemInput
                        templateEdit={this.templateEdit}
                        value={surname}
                        cath={"surname"}
                    />
                    <ElemInput
                        templateEdit={this.templateEdit}
                        value={phone}
                        cath={"phone"}
                    />
                    <ElemInput
                        templateEdit={this.templateEdit}
                        value={address}
                        cath={"address"}
                    />
                </div>
                <Options
                    fillTemplate={this.fillTemplate}
                    template={this.template}
                    editable={this.editable}
                    toggleEditable={this.toggleEditable}
                    id={this.props.id}
                />
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
                <Options
                    fillTemplate={this.fillTemplate}
                    template={this.template}
                    editable={this.editable}
                    toggleEditable={this.toggleEditable}
                    id={this.props.id}
                />
            </div>
        );

        return (
            <React.Fragment>
                {this.editable ? <Form /> : <Div />}
            </React.Fragment>
        );
    }
}

export default Template;
