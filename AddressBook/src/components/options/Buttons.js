export function Cancellation(props) {
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

export function BtnSave(props) {
    return (
        <button onClick={this.editClose} type="button" className="options__btn">
            <Check />
        </button>
    );
}

export function BtnEdit(props) {
    return (
        <button onClick={this.editOpen} type="button" className="options__btn">
            <Pen />
        </button>
    );
}