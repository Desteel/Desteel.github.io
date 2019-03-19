import styled from "styled-components";

export const StyledCardInner = styled.div`
    display: flex;
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-radius: ${props => props.theme.borderRadius};
    padding: 10px;
`;

export const StyledImagebox = styled.div`
    flex: none;
    width: 90px;
    height: 90px;
    margin-right: 15px;

    img {
        border-radius: 8px;
        max-height: 100%;
    }
`;

export const StyledMain = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-right: 10px;
`;

export const StyledInput = styled.input.attrs({
    type: "text"
})`
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-radius: 4px;
    padding: 4px;
`;
