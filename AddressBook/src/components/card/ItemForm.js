import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { Card, Imagebox, Info, Input } from './Styles';
let photoIcon = require('../../images/photo.png');

@observer
class ItemForm extends React.Component {
    @observable phoneValues = this.props.item.phoneValues ? [...this.props.item.phoneValues] : [];

    @action('fill card phones')
    fillPhones = key => e => {
        const { value: newValue, name } = e.target;

        this.phoneValues = this.phoneValues.map((value, i) => i === key ? newValue : value );
        this.props.template[name] = this.phoneValues;
    };

    @action('fill card string')
    fillString = e => {
        const { value, name } = e.target;

        this.props.template[name] = value
    };

    render() {   
        const { photoUrl, name, surname, phoneValues, address } = this.props.item;

        return (
            <Card as="form">
                <Imagebox>
                    <img src={photoUrl ? photoUrl : photoIcon} />
                </Imagebox>
                <Info>
                    <Input
                        onChange={this.fillString}
                        defaultValue={name}
                        name="name"
                        placeholder="name"
                    />
                    <Input
                        onChange={this.fillString}
                        defaultValue={surname}
                        name="surname"
                        placeholder="surname"
                    />
                    {phoneValues.map((value, i) => (
                        <Input
                            onChange={this.fillPhones(i)}
                            key={i}
                            data-id={i}
                            defaultValue={value}
                            name="phoneValues"
                            placeholder="phone"
                        />
                    ))}
                    <Input
                        onChange={this.fillString}
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
