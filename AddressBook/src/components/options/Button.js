function Button({action, children}) {
    return (
        <button onClick={action} type="button" className="options__btn">
            {children}
        </button>
    );
}

export default Button;