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

@inject("contentStore", "modalStore")
@observer
class Creator extends React.Component {
    @observable
    template = {
        id: "",
        photoUrl: "",
        name: "",
        surname: "",
        phoneValues: [],
        address: ""
    };
    @observable phoneValues = [""];

    @action("add phones input")
    addInput = () => {
        this.phoneValues = [...this.phoneValues, ""];
    };

    @action("remove phones input")
    removeInput = key => e => {
        const { name } = e.target;

        this.phoneValues = this.phoneValues.filter((v, i) => i !== key);
        this.template = {
            ...this.template,
            [name]: this.phoneValues.filter(value => !!value)
        };
    };

    @action("fill card phones")
    fillPhones = key => e => {
        const { value: newValue, name } = e.target;

        this.phoneValues = this.phoneValues.map(
            (value, i) => (i === key ? newValue : value)
        );
        this.template = {
            ...this.template,
            [name]: this.phoneValues.filter(value => !!value)
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
        this.props.contentStore.addCard(this.template);
        this.props.modalStore.isOpen = false;
    };

    componentDidMount() {
        this.template = {
            ...this.template,
            id: createGuid()
        };
    }

    render() {
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
                    {this.phoneValues.map((value, i) => (
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
                <Button action={this.addCard}>
                    <IconCheck />
                </Button>
            </form>
        );
    }
}

export default Creator;
