import { StyledHeader, BtnAddCard } from "./StyledHeader";
import Search from "../../search/Search";
import Time from "../../time/Time";
import Creator from "../../creator/Creator";

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <div className="container">
                    <Search />
                    <BtnAddCard content={<Creator />} text={"Add card"} />
                    <Time />
                </div>
            </StyledHeader>
        );
    }
}

export default Header;
