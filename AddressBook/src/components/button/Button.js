import styled from "styled-components";

const StyledButton = styled.button.attrs({
    type: "button"
})`
    flex: none;

    svg {
        fill: currentColor;
    }
`;

const Button = ({ action, children, className }) => (
    <StyledButton onClick={action} className={className}>
        {children}
    </StyledButton>
);

export default Button;
