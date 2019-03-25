import { observer, inject } from "mobx-react";
import { observable, action } from "mobx";
import { Card, Imagebox, Info, Input } from "./Styles";
let photoIcon = require("../../images/photo.png");

@observer
class ItemForm extends React.Component {
    @observable phoneNumbers = this.props.phones ? [...this.props.phone] : [];

    render() {
        const { photoUrl, name, surname, phoneValues, address } = this.props.item,
            { action } = this.props;        

        return (
            <Card as="form">
                <Imagebox>
                    <img src={photoUrl ? photoUrl : photoIcon} />
                </Imagebox>
                <Info>
                    <Input
                        onChange={action}
                        defaultValue={name}
                        name="name"
                        placeholder="name"
                    />
                    <Input
                        onChange={action}
                        defaultValue={surname}
                        name="surname"
                        placeholder="surname"
                    />
                    {phoneValues.map((value, i) => (
                        <Input
                            onChange={action}
                            key={i}
                            data-id={i}
                            defaultValue={value}
                            name="phoneValues"
                            placeholder="phone"
                        />
                    ))}
                    <Input
                        onChange={action}
                        defaultValue={address}
                        name="address"
                        placeholder="address"
                    />
                </Info>
                {this.props.children}
            </Card>
        );
    }
}

export default ItemForm;
