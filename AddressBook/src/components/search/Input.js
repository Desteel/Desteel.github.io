import styled from "styled-components";
import { observer, inject } from "mobx-react";

const StyledInput = styled.input.attrs({
    type: "text",
    placeholder: "Search"
})`
    outline: 0;
    border: none;
    flex: 1;
    padding: 1rem;
    background-color: transparent;
`;

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