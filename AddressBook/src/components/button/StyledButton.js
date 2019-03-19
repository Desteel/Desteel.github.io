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

export default StyledButton;