import { observer, inject } from "mobx-react";
import Card from "../../components/card/";

@inject("contentStore")
@observer
class CardCollection extends React.Component {
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
            return <>{items.map(item => (
                <Card key={item.id} id={item.id} item={item} />
            ))}</>;
        }
    }
}

export default CardCollection;