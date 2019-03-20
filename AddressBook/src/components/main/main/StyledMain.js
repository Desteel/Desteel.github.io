import styled from "styled-components";

const StyledGrid = styled.div`
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

export default StyledGrid;
