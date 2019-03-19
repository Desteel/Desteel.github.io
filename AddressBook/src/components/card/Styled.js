import styled from "styled-components";

export const StyledCardInner = styled.div`
    display: flex;
    border: 1px solid #dadce0;
    border-radius: 8px;
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
    border: 1px solid #dadce0;
    border-radius: 4px;
    padding: 4px;
`;
