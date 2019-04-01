import styled from 'styled-components';

export const Card = styled.div`
    display: flex;
    border: ${({ theme }) => `${theme.border} ${theme.main}`};
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

export const Inputbox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    margin-right: 10px;
`;

export const Input = styled.input`
    border: ${({ theme }) => `${theme.border} ${theme.main}`};
    border-radius: 4px;
    padding: 4px;
    margin-bottom: 10px;
`;

export const Row = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    input {
        margin-bottom: 0;
    }
`;

export const StyledButton = styled.button`
    outline: 0;
    width: 40px;
    height: 40px;
    padding: 0;
    margin: 6px;
    background-color: transparent;
    color: inherit;
`;

export const OptionBtn = styled.button`
    outline: 0;
    padding: 0;
    background-color: transparent;
    color: inherit;
`;
