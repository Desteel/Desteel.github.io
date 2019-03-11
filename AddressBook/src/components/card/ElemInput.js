class ElemInput extends React.Component {
    returnValue = (e) => {
        this.props.templateEdit(e, this.props.cath);
    };

    render() {        
        return (
            <input
                onChange={this.returnValue}
                defaultValue={this.props.value}
                className="input"
                type="text"
            />
        );
    }
}

export default ElemInput;
