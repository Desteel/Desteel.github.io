import { StyledInput } from "./StyledCard";

class ElemInput extends React.Component {
    returnValue = e => {
        this.props.templateEdit(e, this.props.cath);
    };

    render() {
        return (
            <StyledInput
                onChange={this.returnValue}
                defaultValue={this.props.value}
            />
        );
    }
}

export default ElemInput;
