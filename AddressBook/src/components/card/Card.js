import { observer, inject } from "mobx-react";
import Options from "../options/Options";

import "./Card.scss";

let photoIcon = require("../../images/photo.png");

@inject("editStore")
@observer
class Template extends React.Component {
    render() {
        const data = this.props.item,
            editable = this.props.editStore.editable,
            setPhoto = data.photoUrl ? data.photoUrl : photoIcon;

        console.log(editable);

        if (editable) {
            return (
                <form className="card">
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
                    <Options />
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
                <Options />
            </div>
        );
        
    }
}

export default Template;
