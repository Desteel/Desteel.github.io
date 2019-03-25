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
    @observable phoneInputs = [""];

    @action("add phones input")
    addInput = () => {
        this.phoneInputs.push("");
    };
    @action("remove phones input")
    removeInput = i => {
        console.log(i);
    };

    @action("add new phones") setNumber = e => {};

    @action("add card string")
    fillString = e => {
        const { value, name } = e.target;

        this.props.template[name] = value;
    };

    @action("add card")
    addCard = () => {
        this.props.contentStore.addCard(this.template);
        this.props.modalStore.isOpen = false;
    };

    componentDidMount() {
        this.template.id = createGuid();
    }

    render() {
        console.log(new Array(3).fill(""));
        console.log(Array.from(new Array(3)).fill(""));

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
                    {this.phoneInputs.map((value, i) => (
                        <Row key={i}>
                            <Input
                                onChange={this.setNumber(i)}
                                name="phoneValues"
                                placeholder="phone"
                                defaultValue={value}
                            />
                            {i === 0 ? (
                                <Option action={this.addInput}>
                                    add phone{" "}
                                </Option>
                            ) : (
                                <Option action={this.removeInput(i)}>
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
