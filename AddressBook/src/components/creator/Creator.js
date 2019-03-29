import {
    Btn as Button,
    OptionBtn as Option,
    Inputbox,
    Input,
    Row
} from "./StyledCreator";
import { observer } from "mobx-react";
import { observable, action } from "mobx";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import { createGuid } from "../../utils";
import IconCheck from "../../icons/tick.svg";

@observer
class Creator extends React.Component {
    @observable id = createGuid();

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
                            <Input
                                component='input'
                                name='name'
                                placeholder='name'
                                type='text'
                            />
                            <Input
                                component='input'
                                name='lastname'
                                placeholder='lastname'
                                type='text'
                            />
                            <Option
                                action={() => push("phoneValues", undefined)}
                            >
                                Add phone
                            </Option>
                            <FieldArray name='phoneValues'>
                                {({ fields }) =>
                                    fields.map((name, i) => (
                                        <Row key={name}>
                                            <Input
                                                component='input'
                                                name={name}
                                                placeholder='phone'
                                                type='phone'
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
