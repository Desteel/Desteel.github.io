import styled from "styled-components";
import Search from "../../search/Search";
import HocModal from "../../modal/HocModal";
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

const BtnAddCard = styled(HocModal)`
    padding: 8px;
    border: ${props => props.theme.border} ${props => props.theme.main};
    border-radius: ${props => props.theme.borderRadius};
    background-color: transparent;
`;

const content = (
    <div className="test">"This is the test content for BtnAddCard"</div>
);

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <div className="container">
                    <Search />
                    <BtnAddCard content={content} text={"Add card"} />
                    <Time />
                </div>
            </StyledHeader>
        );
    }
}

export default Header;
