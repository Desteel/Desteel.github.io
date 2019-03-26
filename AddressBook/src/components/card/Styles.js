import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    border: ${({theme}) => `${theme.border} ${theme.main}`};
    border-radius: ${({theme}) => `${theme.border} ${theme.main}`};
    padding: 10px;
`;

export const Imagebox = styled.div`
    flex: none;
    width: 90px;
    height: 90px;
    margin-right: 15px;

    img {
        border-radius: 8px;
        max-height: 100%;
    }
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-right: 10px;
`;

export const Input = styled.input`
    border: ${({theme}) => `${theme.border} ${theme.main}`};
    border-radius: 4px;
    padding: 4px;
`;