import { types } from 'mobx-state-tree';

const SearchStore = types
    .model('SearchStore', {
        value: types.string
    })
    .views(self => ({
        get isActive() {
            return self.value.length > 0;
        }
    }))
    .actions(self => ({
        handleChange(e) {
            self.value = e.target.value;
        },
        clearInput() {
            self.value = '';
        }
    }));

export default SearchStore;
