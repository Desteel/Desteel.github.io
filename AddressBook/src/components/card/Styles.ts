import styled from "styled-components";

interface Props {
    theme?: Theme;
}

interface Theme {
    border?: string;
    main?: string;
}

export const Card = styled.div`
    display: flex;
    border: ${({theme}: Props) => `${theme.border} ${theme.main}`};
    border-radius: 8px;
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
    border: ${({theme}: Props) => `${theme.border} ${theme.main}`};
    border-radius: 4px;
    padding: 4px;
`;
