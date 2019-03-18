import { action } from "mobx";
import { observer, inject } from "mobx-react";
import Button from "../button/Button";

@inject("modalStore")
@observer
class HocModal extends React.Component {
    @action("init modal")
    initModal = () => {
        this.props.modalStore.init(this.props.content);
    };

    render() {        
        return (
            <React.Fragment>
                <Button action={this.initModal} className={this.props.className}>{"Add card"}</Button>
            </React.Fragment>
        );
    }
}

export default HocModal;
