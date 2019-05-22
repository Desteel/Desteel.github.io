import { observer, inject } from 'mobx-react';
import Card from '../../components/card/';

@inject('contentStore', 'ContentStore')
@observer
class CardCollection extends React.Component {
    componentDidMount() {
        this.props.contentStore.getData();
    }

    contentStore = this.props.ContentStore.create({
        items: [
            {
                photoUrl:
                    'https://avatars3.githubusercontent.com/u/30462928?s=460&v=4',
                name: 'test1',
                lastname: 'test1',
                phoneValues: ['84626358367', '84626358367'],
                address: 'Detroit'
            },
            {
                photoUrl:
                    'https://avatars3.githubusercontent.com/u/30462928?s=460&v=4',
                name: 'test2',
                lastname: 'test2',
                phoneValues: ['84626358367', '84626358367'],
                address: 'Moscow'
            }
        ]
    });

    render() {
        console.log(this.contentStore.items[0]);

        const { error, isLoaded, items } = this.props.contentStore;

        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <>
                    {items.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            item={{
                                ...item,
                                phoneValues: item.phoneValues.slice()
                            }}
                        />
                    ))}
                    {this.contentStore.items.map(item => (
                        <Card
                            key={item.id}
                            id={item.id}
                            item={{
                                ...item,
                                phoneValues: item.phoneValues.slice()
                            }}
                        />
                    ))}
                </>
            );
        }
    }
}

export default CardCollection;
