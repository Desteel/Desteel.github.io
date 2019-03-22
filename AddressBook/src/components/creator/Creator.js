import { StyledSaveButton, StyledInputbox, StyledInput } from "./StyledCreator";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import IconCheck from "../../icons/tick.svg";

@inject("contentStore", "modalStore")
@observer
class Creator extends React.Component {
    @observable template = {
        id: "",
        photoUrl: "",
        name: "",
        surname: "",
        phone: [],
        address: ""
    };

    uniqueHash = () => (Date.now() * Math.random()).toString(34);

    @action("template edit")
    templateEdit = e => {
        const target = e.target,
            value = target.value,
            name = target.name;

        this.template[name] = value;
    };

    @action("add card")
    addCard = () => {
        this.props.contentStore.addCard(this.template);
        this.props.modalStore.isOpen = false;
    };

    componentDidMount() {
        this.template.id = this.uniqueHash();
    }

    render() {
        return (
            <form>
                <StyledInputbox>
                    <StyledInput
                        onChange={this.templateEdit}
                        name="name"
                        placeholder="name"
                    />
                    <StyledInput
                        onChange={this.templateEdit}
                        name="surname"
                        placeholder="surname"
                    />
                    <StyledInput
                        onChange={this.templateEdit}
                        name="phone"
                        placeholder="phone"
                    />
                    <StyledInput
                        onChange={this.templateEdit}
                        name="address"
                        placeholder="address"
                    />
                </StyledInputbox>
                <StyledSaveButton action={this.addCard}>{<IconCheck/>}</StyledSaveButton>
            </form>
        );
    }
}

export default Creator;
