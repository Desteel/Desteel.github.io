import { observable, action } from 'mobx';
import { createGuid } from '../utils';

class CreatorStore {
    @observable
    template = {
        id: '',
        photoUrl: '',
        name: '',
        surname: '',
        phoneValues: [''],
        address: ''
    };

    @action('add phones input')
    addInput = () => {
        this.template = {
            ...this.template,
            phoneValues: [...this.template.phoneValues, '']
        };
    };

    @action('remove phones input')
    removeInput = key => () => {
        this.template = {
            ...this.template,
            phoneValues: this.template.phoneValues.filter((v, i) => i !== key)
        };
    };

    @action('fill card phones')
    fillPhones = key => e => {
        const { value: newValue } = e.target;

        this.template = {
            ...this.template,
            phoneValues: this.template.phoneValues.map((value, i) =>
                i === key ? newValue : value
            )
        };
    };

    @action('fill card string')
    fillString = e => {
        const { value, name } = e.target;

        this.template = {
            ...this.template,
            [name]: value
        };
    };

    @action('add card')
    addCard = () => {
        this.template = {
            ...this.template,
            id: createGuid(),
            phoneValues: this.template.phoneValues.filter(value => !!value)
        };
        this.props.contentStore.addCard(this.template);
        this.props.modalStore.isOpen = false;
    };
}

const creatorStore = new CreatorStore();

export default creatorStore;
export { CreatorStore };
