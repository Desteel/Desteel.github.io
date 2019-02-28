const form = ({ ...rest }) => (
    <form className="card" {...rest} >
        <div className="card__imagebox">
            <img src={setPhoto} />
        </div>
        <div className="card__main">
            <input className="card__name" value={`${data.name} ${data.surname}`} />
            <input className="card__phone" value={data.phone} />
            <input className="card__address" value={data.address} />
        </div>
        <Options />
    </form>
);
const div = ({ ...rest }) => (
    <div className="card" {...rest} >
        <div className="card__imagebox">
            <img src={setPhoto} />
        </div>
        <div className="card__main">
            <div className="card__name">{`${data.name} ${data.surname}`}</div>
            <div className="card__phone">{data.phone}</div>
            <div className="card__address">{data.address}</div>
        </div>
        <Options />
    </div>
);

export { form, div };