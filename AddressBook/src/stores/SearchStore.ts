import { types, Instance  } from 'mobx-state-tree';

export const SearchStore = types
    .model('SearchStore', {
        value: types.string
    })
    .views(self => ({
        get isActive() {
            return self.value.length > 0;
        }
    }))
    .actions(self => ({
        changeValue(newValue) {
            self.value = newValue;
        },
        clearInput() {
            self.value = '';
        }
    }));

export type SearchStore = Instance<typeof SearchStore>;
