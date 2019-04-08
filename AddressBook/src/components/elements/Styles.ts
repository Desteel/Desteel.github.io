import styled from "styled-components";

export const StyledButton = styled.button`
    flex: none;
    color: inherit;

    svg {
        fill: currentColor;
    }
`;

export const Input = styled.input`
    border: ${({ theme }) => `${theme.border} ${theme.main}`};
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 10px;
`;
