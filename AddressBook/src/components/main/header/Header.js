import { StyledHeader, BtnAddCard } from "./Styles";
import Search from "../../search/Search";
import Time from "../../time/Time";
// import Creator from "../../creator/Creator";
import CreatorHoc from "../../../containers/creator-hoc";

class Header extends React.Component {
    render() {
        return (
            <StyledHeader>
                <div className="container">
                    <Search />
                    <BtnAddCard content={<CreatorHoc />} text={"Add card"} />
                    <Time />
                </div>
            </StyledHeader>
        );
    }
}

export default Header;
