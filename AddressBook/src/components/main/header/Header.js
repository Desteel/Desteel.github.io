import Search from "../../search/Search"
import Time from "../../time/Time"

import "./Header.scss";

function Header() {
    return (
        <header className="header">
			<div className="container">
				<Search />
				<Time />
			</div>            
        </header>
    )
}

export default Header