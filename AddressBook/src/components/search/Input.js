import { observer, inject } from "mobx-react";

@inject("searchStore")
@observer
class Input extends React.Component {
    returnValue = (e) => {
        this.props.searchStore.value = e.target.value;
    }

    render() {
        return (
            <input
                onChange={this.returnValue}
                value={this.props.searchStore.value}
                type="text"
                placeholder="Search"
                className="search__input"
            />
        );
    }
}

export default Input;
