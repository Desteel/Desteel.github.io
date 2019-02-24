class Input extends React.Component {
    constructor(props) {
        super(props);
        this.returnValue = this.returnValue.bind(this);
    }

    returnValue(e) {
        this.props.showBtn(e.target.value);
    }

    render() {
        return (
            <input
                onChange={this.returnValue}
                value={this.props.value}
                type="text"
                placeholder="Search"
                className="search__input"
            />
        );
    }
}

export default Input;
