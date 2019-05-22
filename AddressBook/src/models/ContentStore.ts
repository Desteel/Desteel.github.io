import { types, Instance } from 'mobx-state-tree';
import { Card } from './Card';

export const ContentStore = types.model('ContentStore', {
    cards: types.array(Card)
});

export type TypeContentStore = Instance<typeof ContentStore>;
