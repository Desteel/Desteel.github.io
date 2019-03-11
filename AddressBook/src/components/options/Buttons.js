export function Cancellation(props) {
    console.log(props);
    
    return (
        <button onClick={props.toggleEditable} type="button" className="options__btn">
            exit
        </button>
    );
}

export function Delete(props) {
    return (
        <button onClick={this.delete} type="button" className="options__btn">
            <Cross />
        </button>
    );
}

export function Save(props) {
    return (
        <button onClick={this.editClose} type="button" className="options__btn">
            <Check />
        </button>
    );
}

export function Edit(props) {
    return (
        <button onClick={this.editOpen} type="button" className="options__btn">
            <Pen />
        </button>
    );
}