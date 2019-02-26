import { observer } from 'mobx-react';
import searchStore from "../stores/Search";

@observer class Input extends React.Component {
    constructor(props) {
        super(props);
        this.returnValue = this.returnValue.bind(this);
    }

    returnValue(e) {
        searchStore.value = e.target.value;
    }

    render() {         
        return (
            <input
                onChange={this.returnValue}
                value={searchStore.value}
                type="text"
                placeholder="Search"
                className="search__input"
            />
        );
    }
}

export default Input;