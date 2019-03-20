import { Card, Imagebox, Info, Input } from "./StyledCard";
let photoIcon = require("../../images/photo.png");

export function Form({ children, ...rest }) {
    const { photoUrl, name, surname, phone, address } = rest.props;

    return (
        <Card as="form">
            <Imagebox>
                <img src={photoUrl ? photoUrl : photoIcon} />
            </Imagebox>
            <Info>
                <Input
                    onChange={rest.action}
                    defaultValue={name}
                    name="name"
                />
                <Input
                    onChange={rest.action}
                    defaultValue={surname}
                    name="surname"
                />
                <Input
                    onChange={rest.action}
                    defaultValue={phone}
                    name="phone"
                />
                <Input
                    onChange={rest.action}
                    defaultValue={address}
                    name="address"
                />
            </Info>
            {children}
        </Card>
    );
}

export function Div({ children, ...rest }) {
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
