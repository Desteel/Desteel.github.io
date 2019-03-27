import {
    Btn as Button,
    OptionBtn as Option,
    Inputbox,
    Input,
    Row
} from './StyledCreator';
import { observable, action } from 'mobx';
import { observer, inject } from 'mobx-react';
import IconCheck from '../../icons/tick.svg';
import { createGuid } from '../../utils';

@inject('contentStore', 'modalStore', 'creatorStore')
@observer
class Creator extends React.Component {
    // @observable template = {
    //     id: "",
    //     photoUrl: "",
    //     name: "",
    //     surname: "",
    //     phoneValues: [""],
    //     address: ""
    // };

    // @action("add phones input")
    // addInput = () => {
    //     this.template = {
    //         ...this.template,
    //         phoneValues: [...this.template.phoneValues, ""]
    //     };
    // };

    // @action("remove phones input")
    // removeInput = key => () => {
    //     this.template = {
    //         ...this.template,
    //         phoneValues: this.template.phoneValues.filter((v, i) => i !== key)
    //     };
    // };

    // @action("fill card phones")
    // fillPhones = key => e => {
    //     const { value: newValue } = e.target;

    //     this.template = {
    //         ...this.template,
    //         phoneValues: this.template.phoneValues.map(
    //             (value, i) => (i === key ? newValue : value)
    //         )
    //     };
    // };

    // @action("fill card string")
    // fillString = e => {
    //     const { value, name } = e.target;

    //     this.template = {
    //         ...this.template,
    //         [name]: value
    //     };
    // };

    // @action("create card")
    // createCard = () => {
    //     this.template = {
    //         ...this.template,
    //         id: createGuid(),
    //         phoneValues: this.template.phoneValues.filter(value => !!value)
    //     };
    // };

    @action('create and add card ')
    handleClick = () => {
        this.props.creatorStore.createCard();        
        this.props.action(this.props.creatorStore.template);
    };

    componentWillMount () {
        this.props.creatorStore.template = {
            id: "",
            photoUrl: "",
            name: "",
            surname: "",
            phoneValues: [""],
            address: ""
        };
    }

    render() {
        const {
                fillString,
                fillPhones,
                addInput,
                removeInput
            } = this.props.creatorStore,
            { phoneValues } = this.props.creatorStore.template;

        // console.log(this.props.creatorStore.template);

        return (
            <form>
                <Inputbox>
                    <Input
                        onChange={fillString}
                        name="name"
                        placeholder="name"
                    />
                    <Input
                        onChange={fillString}
                        name="surname"
                        placeholder="surname"
                    />
                    {phoneValues.map((value, i) => (
                        <Row key={i}>
                            <Input
                                onChange={fillPhones(i)}
                                name="phoneValues"
                                placeholder="phone"
                                defaultValue={value}
                            />
                            {i === 0 ? (
                                <Option action={addInput}>add phone</Option>
                            ) : (
                                <Option
                                    action={removeInput(i)}
                                    name={'phoneValues'}
                                >
                                    remove phone
                                </Option>
                            )}
                        </Row>
                    ))}
                    <Input
                        onChange={fillString}
                        name="address"
                        placeholder="address"
                    />
                </Inputbox>
                <Button action={this.handleClick}>
                    <IconCheck />
                </Button>
            </form>
        );
    }
}

export default Creator;
