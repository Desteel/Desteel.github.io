import styled from "styled-components";
import Search from "../../search/Search";
import Time from "../../time/Time";

const StyledHeader = styled.header`
    padding: 8px;
    border-bottom: 1px solid #dadce0;

    .container {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

const Header = () => (
    <StyledHeader>
        <div className="container">
            <Search />
            <Time />
        </div>
    </StyledHeader>
);

export default Header;
