import { StyledHeader, BtnAddCard } from "./StyledHeader";
import Search from "../../search/Search";
import Time from "../../time/Time";

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
