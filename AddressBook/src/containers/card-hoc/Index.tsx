import React from 'react';
import { observer, inject } from 'mobx-react';
import Card from '../../components/card';
import { TCard } from '../../models/Card';
import { TContentStore } from '../../models/ContentStore';

interface ITemp {
    [key: string]: any;
}

@inject('contentStore', 'contentStoreMST')
@observer
class CardCollection extends React.Component<ITemp, {}> {
    componentDidMount() {
        this.props.contentStore.getData();
    }

    render() {
        const { error, isLoaded, items } = this.props.contentStore;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    {items.map((item: TCard) => (
                        <Card
                            key={item.id}
                            id={item.id}
                            item={{
                                ...item,
                                phoneValues: item.phoneValues.slice()
                            }}
                        />
                    ))}
                    {this.props.contentStoreMST.cards.map((card: TCard) => (
                        <div key={card.id} id={card.id}>
                            {card.name}
                            <br />
                            <button onClick={card.remove}>delete this</button>
                        </div>
                    ))}
                </>
            );
        }
    }
}

export default CardCollection;
