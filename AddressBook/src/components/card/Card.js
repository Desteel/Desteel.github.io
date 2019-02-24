class Template extends React.Component {
    render() {
        let _data = this.props.data;

        return (
            <div className="card">
                <div>
                    <img src={_data.photoUrl} />
                </div>
                <div>{_data.name}</div>
                <div>{_data.surname}</div>
                <div>{_data.phone}</div>
                <div>{_data.address}</div>
            </div>
        );
    }
}

export default Template;
