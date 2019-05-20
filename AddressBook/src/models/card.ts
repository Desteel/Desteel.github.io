import { types, Instance } from 'mobx-state-tree';
import { createGuid } from '../utils';

export const Card = types.model('Card', {
    id: types.optional(types.string, () => createGuid()),
    photoUrl: types.string,
    name: types.string,
    lastname: types.string,
    phoneValues: types.array(types.string),
    address: types.string
});

export type Card = Instance<typeof Card>;
