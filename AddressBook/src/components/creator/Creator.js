import { observable, action } from "mobx";
import { observer, inject } from "mobx-react";
import Button from "../button/Button";

@inject("contentStore", "modalStore")
@observer
class Creator extends React.Component {
    @observable template = {
        id: "",
        photoUrl: "",
        name: "",
        surname: "",
        phone: "",
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
        // this.props.modalStore.isOpen = false;
    };

    componentDidMount() {
        this.template.id = this.uniqueHash();
    }

    render() {
        return (
            <form>
                <div>
                    <input
                        onChange={this.templateEdit}
                        name="name"
                        placeholder="name"
                    />
                    <input
                        onChange={this.templateEdit}
                        name="surname"
                        placeholder="surname"
                    />
                    <input
                        onChange={this.templateEdit}
                        name="phone"
                        placeholder="phone"
                    />
                    <input
                        onChange={this.templateEdit}
                        name="address"
                        placeholder="address"
                    />
                </div>
                <Button action={this.addCard}>{"Save"}</Button>
            </form>
        );
    }
}

export default Creator;
