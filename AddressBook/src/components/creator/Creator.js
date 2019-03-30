import {
    Btn as Button,
    OptionBtn as Option,
    Inputbox,
    Row
} from "./StyledCreator";
import { Input } from "../elements/Styles";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Form, Field } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { FieldValidating } from "../elements/";
import { createGuid } from "../../utils";
import IconCheck from "../../icons/tick.svg";

@observer
class Creator extends React.Component {
    @observable id = createGuid();

    required = value => (value ? undefined : "Required");

    mustBeNumber = value => (isNaN(value) ? "Must be a number" : undefined);

    // minValue = min => value =>
    //     isNaN(value) || value <= min
    //         ? undefined
    //         : `Should be greater than ${min}`;

    composeValidators = (...validators) => value =>
        validators.reduce(
            (error, validator) => error || validator(value),
            undefined
        );

    @action("submit")
    onSubmit = values => {
        this.id = createGuid();
        this.props.action(values);
        console.log(JSON.stringify(values, 0, 2));
    };

    render() {
        return (
            <Form
                initialValues={{ id: this.id, phoneValues: [""] }}
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
                            <FieldValidating
                                name={"name"}
                                validate={this.required}
                                type={"text"}
                                placeholder={"name"}
                            />
                            <FieldValidating
                                name={"lastname"}
                                validate={this.required}
                                type={"text"}
                                placeholder={"lastname"}
                            />
                            <Option action={() => push("phoneValues", "")}>
                                Add phone
                            </Option>
                            <FieldArray name='phoneValues'>
                                {({ fields }) =>
                                    fields.map((name, i) => (
                                        <Row key={name}>
                                            <FieldValidating
                                                name={name}
                                                validate={this.composeValidators(
                                                    this.required,
                                                    this.mustBeNumber,
                                                    // this.minValue(5)
                                                )}
                                                type={"phone"}
                                                placeholder={"phone"}
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
                                component='input'
                                name='address'
                                placeholder='address'
                                type='text'
                            />
                        </Inputbox>
                        <Button type={"submit"}>
                            <IconCheck />
                        </Button>
                    </form>
                )}
            />
        );
    }
}

export default Creator;
