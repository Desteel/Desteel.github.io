import { ContentStore } from '../models/ContentStore';

const contentStoreMST = ContentStore.create({
    cards: [
        {
            id: 'a',
            photoUrl:
                'https://avatars3.githubusercontent.com/u/30462928?s=460&v=4',
            name: 'test1',
            lastname: 'test1',
            phoneValues: ['84626358367', '84626358367'],
            address: 'Detroit'
        },
        {
            id: 'b',
            photoUrl:
                'https://avatars3.githubusercontent.com/u/30462928?s=460&v=4',
            name: 'test2',
            lastname: 'test2',
            phoneValues: ['84626358367', '84626358367'],
            address: 'Moscow'
        }
    ]
});

export default contentStoreMST;
