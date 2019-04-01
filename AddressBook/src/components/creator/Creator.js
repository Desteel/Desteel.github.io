import { observer } from 'mobx-react';
import { observable, action } from 'mobx';
import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { InputValidating } from '../elements/';
import { createGuid } from '../../utils';
import {
    required,
    mustBeNumber,
    minLength,
    composeValidators
} from '../../utils/Validate';
import IconCheck from '../../icons/tick.svg';
import {
    Btn as Button,
    OptionBtn as Option,
    Inputbox,
    Row
} from './StyledCreator';
import { Input } from '../elements/Styles';

@observer
class Creator extends React.Component {
    @observable id = createGuid();

    arrayRequired = value => {
        console.log(value);
    };

    @action('submit')
    onSubmit = values => {
        this.id = createGuid();
        this.props.action(values);
        console.log(JSON.stringify(values, 0, 2));
    };

    render() {
        return (
            <Form
                initialValues={{ id: this.id, phoneValues: [''] }}
                onSubmit={this.onSubmit}
                mutators={{
                    ...arrayMutators
                }}
                render={({
                    handleSubmit,
                    form: {
                        mutators: { push }
                    }
                }) => (
                    <form onSubmit={handleSubmit}>
                        <Inputbox>
                            <Input
                                as={Field}
                                component={InputValidating}
                                name="name"
                                placeholder="name"
                                type="text"
                                validate={required}
                            />
                            <Input
                                as={Field}
                                component={InputValidating}
                                name="lastname"
                                placeholder="name"
                                type="text"
                                validate={required}
                            />
                            <Option action={() => push('phoneValues', '')}>
                                Add phone
                            </Option>
                            <FieldArray
                                name="phoneValues"
                                validate={this.arrayRequired}
                            >
                                {({ fields }) =>
                                    fields.map((name, i) => (
                                        <Row key={name}>
                                            <Input
                                                as={Field}
                                                component={InputValidating}
                                                name={name}
                                                placeholder="phone"
                                                type="phone"
                                                validate={composeValidators(
                                                    required,
                                                    mustBeNumber,
                                                    minLength(3)
                                                )}
                                            />
                                            <Option
                                                action={() => fields.remove(i)}
                                            >
                                                ❌
                                            </Option>
                                        </Row>
                                    ))
                                }
                            </FieldArray>
                            <Input
                                as={Field}
                                component="input"
                                name="address"
                                placeholder="address"
                                type="text"
                            />
                        </Inputbox>
                        <Button type={'submit'}>
                            <IconCheck />
                        </Button>
                    </form>
                )}
            />
        );
    }
}

export default Creator;
