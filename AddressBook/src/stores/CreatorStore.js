import { observable, action } from 'mobx';
import { createGuid } from '../utils';

class CreatorStore {
    @observable
    template = {
        id: '',
        photoUrl: '',
        name: '',
        surname: '',
        phoneValues: [],
        address: ''
    };
    phoneValues = [''];

    @action('add phones input')
    addInput = () => {
        this.phoneValues = [...this.phoneValues, ''];        
    };

    @action('remove phones input')
    removeInput = key => e => {
        const { name } = e.target;

        this.phoneValues = this.phoneValues.filter((v, i) => i !== key);
        this.template = {
            ...this.template,
            [name]: this.phoneValues.filter(value => !!value)
        };
    };

    @action('fill card phones')
    fillPhones = key => e => {
        const { value: newValue, name } = e.target;

        this.phoneValues = this.phoneValues.map((value, i) =>
            i === key ? newValue : value
        );
        this.template = {
            ...this.template,
            [name]: this.phoneValues.filter(value => !!value)
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
            id: createGuid()
        };
        this.props.contentStore.addCard(this.template);
        this.props.modalStore.isOpen = false;
    };
}

const creatorStore = new CreatorStore();

export default creatorStore;
export { CreatorStore };
