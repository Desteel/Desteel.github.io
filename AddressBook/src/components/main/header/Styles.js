import styled from "styled-components";
import HocModal from "../../modal/HocModal";

export const StyledHeader = styled.header`
    padding: 8px;
    border-bottom: ${props => props.theme.border} ${props => props.theme.main};

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const BtnAddCard = styled(HocModal)`
    padding: 8px;
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-radius: ${props => props.theme.borderRadius};
    background-color: transparent;
`;
