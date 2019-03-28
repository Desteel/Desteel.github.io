import { action } from "mobx";
import { observer, inject } from "mobx-react";
import Creator from "../../components/creator/Creator";

@inject("contentStore", "modalStore")
@observer
class CreatorHoc extends React.Component {
    @action("add card")
    addCard = template => {
        this.props.contentStore.addCard(template);
        this.props.modalStore.isOpen = false;
    };

    render() {
        return <Creator action={this.addCard} />;
    }
}

export default CreatorHoc;