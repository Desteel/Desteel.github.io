import styled from "styled-components";

const StyledInput = styled.input.attrs({
    type: "text"
})`
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 4px;
`;

class ElemInput extends React.Component {
    returnValue = (e) => {
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
