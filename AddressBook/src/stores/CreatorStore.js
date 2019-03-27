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
    addInput = template => () => {
        this.template = {
            ...this.template,
            phoneValues: [...this.template.phoneValues, '']
        };

        console.log(template);        
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

    @action('create card')
    createCard = () => {
        this.template = {
            ...this.template,
            id: createGuid(),
            phoneValues: this.template.phoneValues.filter(value => !!value)
        };

        console.log(this.template);
        
    };
}

const creatorStore = new CreatorStore();

export default creatorStore;
export { CreatorStore };
