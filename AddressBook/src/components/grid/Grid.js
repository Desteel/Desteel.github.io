import Template from "../card/Card";

require('../../data/items.json');

class Grid extends React.Component {
    render() {
        return (
            <div className="grid">
                <Template
                    data={{
                        photoUrl:
                            "https://avatars3.githubusercontent.com/u/30462928?s=460&v=4",
                        name: "Alexander",
                        surname: "Kerensky",
                        phone: "84626358367",
                        address: "Detroit"
                    }}
                />
            </div>
        );
    }
}

export default Grid;
