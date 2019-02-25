// import { observable } from 'mobx';
// import { observer } from 'mobx-react';

import BtnClear from "./BtnClear";
import BtnSearch from "./BtnSearch";
import Input from "./Input";

import "./Search.scss";

// const appState = observable({
//     value: ""
// })

// console.log(appState)

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            value: ""
        };
        this.showBtn = this.showBtn.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }    

    showBtn(value) {
        this.setState({ value }, () => {
            let currentValLength = this.state.value.length;

            currentValLength > 0
                ? this.setState({ isActive: true })
                : this.setState({ isActive: false });
        });
    }

    clearInput() {
        this.setState({ value: "" });
        this.setState({ isActive: false });
    }

    render() {
        return (
            <form className="search" method="get">
                <BtnSearch />
                <Input showBtn={this.showBtn} value={this.state.value} />
                <BtnClear
                    clearInput={this.clearInput}
                    isActive={this.state.isActive}
                />
            </form>
        );
    }
}

export default Search;
