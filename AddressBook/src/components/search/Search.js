import { observable } from 'mobx';
import { observer } from 'mobx-react';

import BtnClear from "./BtnClear";
import BtnSearch from "./BtnSearch";
import Input from "./Input";

import "./Search.scss";

const appState = observable({
    isActive: false,
    value: ""
})

appState.showBtn = function (val) {
    this.value = val;

    let currentValLength = this.value.length;
    currentValLength > 0
        ? this.isActive = true
        : this.isActive = false 
}
appState.clearInput = function () {
    this.isActive = false;
    this.value = "";
}

@observer class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false,
            value: ""
        };
        this.showBtn = this.showBtn.bind(this);
        this.clearInput = this.clearInput.bind(this);
    }    

    showBtn(val) {        
        appState.showBtn(val);
    }

    clearInput() {
        appState.clearInput();
    }

    render() {
        return (
            <form className="search" method="get">
                <BtnSearch />
                <Input 
                    value={appState.value} 
                    showBtn={this.showBtn} 
                />
                <BtnClear
                    isActive={appState.isActive}
                    clearInput={this.clearInput}
                />
            </form>
        );
    }
}

export default Search;
