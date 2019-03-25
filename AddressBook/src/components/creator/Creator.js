import { StyledSaveButton, StyledInputbox, StyledInput } from "./StyledCreator";
import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import IconCheck from "../../icons/tick.svg";

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

    uniqueHash = () => (Date.now() * Math.random()).toString(34);

    @action("template edit")
    templateEdit = e => {
        const target = e.target,
            value = target.value,
            name = target.name,
            id = e.target.dataset.id;

        let isArray = Array.isArray(this.template[name]);

        if (isArray) {
            if (this.template[name].length < id) {
                this.template[name][this.template[name].length] = value;
            } else {
                this.template[name][id] = value;
            }
        } else {
            this.template[name] = value;
        }

        console.log(this.template.phone);

        // isArray
        //     ? (this.template[name][id] = value)
        //     : (this.template[name] = value);
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
                        name="phoneValues"
                        placeholder="phone"
                        data-id="0"
                    />
                    <StyledInput
                        onChange={this.templateEdit}
                        name="phoneValues"
                        placeholder="phone"
                        data-id="1"
                    />
                    <StyledInput
                        onChange={this.templateEdit}
                        name="phoneValues"
                        placeholder="phone"
                        data-id="2"
                    />
                    <StyledInput
                        onChange={this.templateEdit}
                        name="phoneValues"
                        placeholder="phone"
                        data-id="3"
                    />
                    <StyledInput
                        onChange={this.templateEdit}
                        name="address"
                        placeholder="address"
                    />
                </StyledInputbox>
                <StyledSaveButton action={this.addCard}>
                    {<IconCheck />}
                </StyledSaveButton>
            </form>
        );
    }
}

export default Creator;
