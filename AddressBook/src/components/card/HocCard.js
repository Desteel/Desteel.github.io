import { observer, inject } from "mobx-react";
import Card from "./Card";

@inject("contentStore")
@observer
class HocCard extends React.Component {
    componentDidMount() {
        this.props.contentStore.fetchData();
    }

    render() {
        const { error, isLoaded, items } = this.props.contentStore;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            const cards = items.map(item => (
                <Card key={item.id} id={item.id} item={item} />
            ));
            return <React.Fragment>{cards}</React.Fragment>;
        }
    }
}

export default HocCard;
