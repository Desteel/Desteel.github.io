import StyledInput from "./StyledInput";

const Input = ({ action, value, className }) => (
    <StyledInput onChange={action} defaultValue={value} className={className} />
);

export default Input;
