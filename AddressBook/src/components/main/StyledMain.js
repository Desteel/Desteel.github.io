import styled from "styled-components";
import HocModal from "../modal/HocModal";

export const StyledHeader = styled.header`
    padding: 8px;
    border-bottom: ${props => props.theme.border} ${props => props.theme.main};

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const StyledFooter = styled.footer`
    padding: 8px;
    border-top: ${props => props.theme.border} ${props => props.theme.main};
`;

export const StyledGrid = styled.div`
    display: flex;
    flex-flow: wrap;
    margin: 0 -15px;
    padding: 40px 0;

    > * {
        width: calc(100% / ${props => props.rowItemCount || 1} - 30px);
        margin: 0 15px;
        margin-bottom: 30px;
    }
`;

export const BtnAddCard = styled(HocModal)`
    padding: 8px;
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-radius: ${props => props.theme.borderRadius};
    background-color: transparent;
`;
