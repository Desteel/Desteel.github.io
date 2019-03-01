import { observer, inject } from "mobx-react";

import Template from "../card/Card";
import "./Grid.scss";

@inject("contentStore")
@observer
class Grid extends React.Component {
    componentDidMount() {
        this.props.contentStore.fetch();
    }

    render() {
        const { error, isLoaded, items } = this.props.contentStore;

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
