import Template from "../card/Card";

import "./Grid.scss";

let jsonUrl = require("../../data/items.json");

class Grid extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch(jsonUrl)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                error => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            );
    }

    render() {
        const { error, isLoaded, items } = this.state;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const cards = items.map((item, i) => (
                <Template key={i} item={item} />
            ));
            return <div className="grid">{cards}</div>;
        }
    }
}

export default Grid;
