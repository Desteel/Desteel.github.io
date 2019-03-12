import ElemInput from "./ElemInput";
let photoIcon = require("../../images/photo.png");

export function Form({ children, ...rest }) {    
    const { photoUrl, name, surname, phone, address } = rest.props;

    return (
        <form className="card">
            <div className="card__imagebox">
                <img src={photoUrl ? photoUrl : photoIcon} />
            </div>
            <div className="card__main">
                <ElemInput templateEdit={rest.action} value={name} cath={"name"} />
                <ElemInput templateEdit={rest.action} value={surname} cath={"surname"} />
                <ElemInput templateEdit={rest.action} value={phone} cath={"phone"} />
                <ElemInput templateEdit={rest.action} value={address} cath={"address"} />
            </div>
            {children}
        </form>
    );
}

export function Div({ children, ...rest }) {
    const { photoUrl, name, surname, phone, address } = rest.props;

    return (
        <div className="card">
            <div className="card__imagebox">
                <img src={photoUrl ? photoUrl : photoIcon} />
            </div>
            <div className="card__main">
                <div className="card__name">{`${name} ${surname}`}</div>
                <div className="card__phone">{phone}</div>
                <div className="card__address">{address}</div>
            </div>
            {children}
        </div>
    );
}




