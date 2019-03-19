import { StyledButton } from "./Styled.js";

const Button = ({ action, children, className, ...rest }) => (
    <StyledButton onClick={action} className={className}>
        {children}
    </StyledButton>
);

export default Button;
