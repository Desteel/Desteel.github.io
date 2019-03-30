import { action } from "mobx";
import { observer, inject } from "mobx-react";
import { Button } from "../elements/";

@inject("modalStore")
@observer
class HocModal extends React.Component {
    @action("init modal")
    initModal = () => {
        this.props.modalStore.init(this.props.content);
    };

    render() {
        return (
            <Button action={this.initModal} className={this.props.className}>
                {this.props.text}
            </Button>
        );
    }
}

export default HocModal;
