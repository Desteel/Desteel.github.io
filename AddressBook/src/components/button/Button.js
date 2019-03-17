import styled from "styled-components";

const StyledButton = styled.button.attrs({
    type: "button"
})`
    flex: none;
    color: inherit;

    svg {
        fill: currentColor;
    }
`;

const Button = ({ action, children, className, ...rest }) => (
    <StyledButton onClick={action} className={className}>
        {children}
    </StyledButton>
);

export default Button;
