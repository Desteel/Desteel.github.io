import BtnClear from "./BtnClear";
import BtnSearch from "./BtnSearch";
import Input from "./Input";

import "./Search.scss";

class Search extends React.Component {
    render() {
        return (
            <form className="search" method="get">
                <BtnSearch />
                <Input />
                <BtnClear />
            </form>
        );
    }
}

export default Search;
