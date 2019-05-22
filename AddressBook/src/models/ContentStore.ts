import { types, destroy, Instance } from 'mobx-state-tree';
import { Card } from './Card';

export const ContentStore = types
    .model('ContentStore', {
        cards: types.array(Card)
    })
    .actions(self => ({
        remove(card) {
            destroy(card);
        }
    }));

export type TypeContentStore = Instance<typeof ContentStore>;
