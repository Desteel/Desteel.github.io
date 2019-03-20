import { Card, Imagebox, Info, Input } from "./StyledCard";
let photoIcon = require("../../images/photo.png");

function Form({ children, ...rest }) {
    const { photoUrl, name, surname, phone, address } = rest.props;

    return (
        <Card as="form">
            <Imagebox>
                <img src={photoUrl ? photoUrl : photoIcon} />
            </Imagebox>
            <Info>
                <Input onChange={rest.action} defaultValue={name} name="name" />
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

export default Form;
