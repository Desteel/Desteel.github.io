import { StyledInput } from "./StyledSearch";
import { observer, inject } from "mobx-react";

@inject("searchStore")
@observer
class Input extends React.Component {
    returnValue = e => {
        this.props.searchStore.value = e.target.value;
    };

    render() {
        return (
            <StyledInput
                onChange={this.returnValue}
                value={this.props.searchStore.value}
            />
        );
    }
}

export default Input;
