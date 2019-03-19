import StyledButton from "./StyledButton";

const Button = ({ action, children, className, ...rest }) => (
    <StyledButton onClick={action} className={className}>
        {children}
    </StyledButton>
);

export default Button;
