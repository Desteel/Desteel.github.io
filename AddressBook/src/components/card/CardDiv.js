import { Card, Imagebox, Info } from "./StyledCard";
let photoIcon = require("../../images/photo.png");

function Div({ children, ...rest }) {
    const { photoUrl, name, surname, phone, address } = rest.props;

    return (
        <Card>
            <Imagebox>
                <img src={photoUrl ? photoUrl : photoIcon} />
            </Imagebox>
            <Info>
                <div>{`${name} ${surname}`}</div>
                <div>{phone}</div>
                <div>{address}</div>
            </Info>
            {children}
        </Card>
    );
}

export default Div;
