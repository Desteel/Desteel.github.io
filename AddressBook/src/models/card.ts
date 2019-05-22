import { types, Instance } from 'mobx-state-tree';

export const Card = types.model('Card', {
    id: types.identifier,
    photoUrl: types.maybe(types.string),
    name: types.string,
    lastname: types.string,
    phoneValues: types.array(types.string),
    address: types.string
});

export type TypeCard = Instance<typeof Card>;
