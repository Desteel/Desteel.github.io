import styled from "styled-components";

const StyledInput = styled.input.attrs({
    type: "text"
})`
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 4px;
`;

const Input = ({ action, value, className }) => (
    <StyledInput onChange={action} defaultValue={value} className={className} />
);

export default Input;
