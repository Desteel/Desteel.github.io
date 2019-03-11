function Form({action, children}) {
    return (
        <form className="card">
                <div className="card__imagebox">
                    <img src={setPhoto} />
                </div>
                <div className="card__main">
                    <ElemInput
                        templateEdit={action}
                        value={name}
                        cath={"name"}
                    />
                    <ElemInput
                        templateEdit={action}
                        value={surname}
                        cath={"surname"}
                    />
                    <ElemInput
                        templateEdit={action}
                        value={phone}
                        cath={"phone"}
                    />
                    <ElemInput
                        templateEdit={action}
                        value={address}
                        cath={"address"}
                    />
                </div>
                {
                    children
                }
            </form>
    );
}

export default Form;