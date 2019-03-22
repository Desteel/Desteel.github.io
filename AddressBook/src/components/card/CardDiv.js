import { Card, Imagebox, Info } from "./StyledCard";
let photoIcon = require("../../images/photo.png");

function Div({ children, ...rest }) {
    const { photoUrl, name, surname, phone, address } = rest.props;

    const Phones = () => phone.map((item, i) => <div key={i}>{item}</div>);

    return (
        <Card>
            <Imagebox>
                <img src={photoUrl ? photoUrl : photoIcon} />
            </Imagebox>
            <Info>
                <div>{`${name} ${surname}`}</div>
                <Phones />
                <div>{address}</div>
            </Info>
            {children}
        </Card>
    );
}

export default Div;
