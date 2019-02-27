import { observer, inject } from 'mobx-react';

import Template from "../card/Card";
import "./Grid.scss";

let jsonUrl = require("../../data/items.json");

@inject("gridStore")
@observer
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
        this.props.gridStore.fetch();
    }

    render() { 
        const { error, isLoaded, items } = this.props.gridStore;

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
