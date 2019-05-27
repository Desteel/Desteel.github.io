import { Card, Imagebox, Info } from "./Styles";
let photoIcon = require("../../images/photo.png");

function ViewStatic({ children, ...rest }) {
    const { photoUrl, name, lastname, phoneValues, address } = rest.item;

    return (
        <Card>
            <Imagebox>
                <img src={photoUrl ? photoUrl : photoIcon} />
            </Imagebox>
            <Info>
                <div>{`${name} ${lastname}`}</div>
                {phoneValues.map((value, i) => (
                    <div key={i}>{value}</div>
                ))}
                <div>{address}</div>
            </Info>
            {children}
        </Card>
    );
}

export default ViewStatic;
