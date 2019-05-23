import { types, getParent, Instance } from 'mobx-state-tree';
import { TContentStore } from './ContentStore';

export const Card = types
    .model('Card', {
        id: types.identifier,
        photoUrl: types.maybe(types.string),
        name: types.string,
        lastname: types.string,
        phoneValues: types.array(types.string),
        address: types.string
    })
    .actions(self => ({
        remove() {
            getParent<TContentStore>(self, 2).remove(self);
        }
    }));

export type TCard = Instance<typeof Card>;
