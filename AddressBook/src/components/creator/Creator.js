import {
    Btn as Button,
    OptionBtn as Option,
    Inputbox,
    Input,
    Row
} from "./StyledCreator";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import IconCheck from "../../icons/tick.svg";
import { createGuid } from "../../utils";

@inject("contentStore", "modalStore", "creatorStore")
@observer
class Creator extends React.Component {
    @observable
    template = {
        id: "",
        photoUrl: "",
        name: "",
        surname: "",
        phoneValues: [""],
        address: ""
    };

    @action("add phones input")
    addInput = () => {
        this.template = {
            ...this.template,
            phoneValues: [...this.template.phoneValues, ""]
        };
    };

    @action("remove phones input")
    removeInput = key => () => {
        this.template = {
            ...this.template,
            phoneValues: this.template.phoneValues.filter((v, i) => i !== key)
        };
    };

    @action("fill card phones")
    fillPhones = key => e => {
        const { value: newValue } = e.target;

        this.template = {
            ...this.template,
            phoneValues: this.template.phoneValues.map(
                (value, i) => (i === key ? newValue : value)
            )
        };
    };

    @action("fill card string")
    fillString = e => {
        const { value, name } = e.target;

        this.template = {
            ...this.template,
            [name]: value
        };
    };

    @action("add card")
    addCard = () => {
        this.template = {
            ...this.template,
            id: createGuid(),
            phoneValues: this.template.phoneValues.filter(value => !!value)
        };
        console.log(this.template);
        // this.props.contentStore.addCard(this.template);
        this.props.modalStore.isOpen = false;
    };

    handleClick = () => {
        this.addCard();
        this.props.action(this.template);
    };

    render() {
        const {
                fillString,
                fillPhones,
                addInput,
                removeInput,
                addCard
            } = this.props.creatorStore,
            { phoneValues } = this.props.creatorStore.template;

        return (
            <form>
                <Inputbox>
                    <Input
                        onChange={this.fillString}
                        name="name"
                        placeholder="name"
                    />
                    <Input
                        onChange={this.fillString}
                        name="surname"
                        placeholder="surname"
                    />
                    {this.template.phoneValues.map((value, i) => (
                        <Row key={i}>
                            <Input
                                onChange={this.fillPhones(i)}
                                name="phoneValues"
                                placeholder="phone"
                                defaultValue={value}
                            />
                            {i === 0 ? (
                                <Option action={this.addInput}>
                                    add phone
                                </Option>
                            ) : (
                                <Option
                                    action={this.removeInput(i)}
                                    name={"phoneValues"}
                                >
                                    remove phone
                                </Option>
                            )}
                        </Row>
                    ))}
                    <Input
                        onChange={this.fillString}
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
