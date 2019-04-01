import { Form, Field } from 'react-final-form';
import arrayMutators from 'final-form-arrays';
import { FieldArray } from 'react-final-form-arrays';
import { InputValidating } from '../elements/';
import {
    required,
    mustBeNumber,
    minLength,
    composeValidators
} from '../../utils/Validate';
import { Card, Imagebox, Inputbox, Row, StyledButton, OptionBtn, Input } from './Styles';
import { Button } from '../elements';
let photoIcon = require('../../images/photo.png');

class CardForm extends React.Component {
    onSubmit = values => {
        this.props.onSubmit(values);
        console.log(JSON.stringify(values, 0, 2));
    };

    render() {
        const photoUrl = this.props.photo;

        return (
            <Form
                initialValues={this.props.initialValues}
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
                    <Card as="form" onSubmit={handleSubmit}>
                        <Imagebox>
                            <img src={photoUrl ? photoUrl : photoIcon} />
                        </Imagebox>
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
                                placeholder="lastname"
                                type="text"
                                validate={required}
                            />
                            <OptionBtn
                                as={Button}
                                action={() => push('phoneValues', '')}
                            >
                                Add phone
                            </OptionBtn>
                            <FieldArray name="phoneValues">
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
                                            <StyledButton
                                                as={Button}
                                                action={() => fields.remove(i)}
                                            >
                                                ❌
                                            </StyledButton>
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
                        {this.props.children}
                    </Card>
                )}
            />
        );
    }
}

export default CardForm;
