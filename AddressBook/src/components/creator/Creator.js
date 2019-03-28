import {
    Btn as Button,
    OptionBtn as Option,
    Inputbox,
    Input,
    Row
} from "./StyledCreator";
import { action } from "mobx";
import { observer, inject } from "mobx-react";
import { Form } from "react-final-form";
import arrayMutators from "final-form-arrays";
import { FieldArray } from "react-final-form-arrays";
import IconCheck from "../../icons/tick.svg";

@inject("contentStore", "modalStore", "creatorStore")
@observer
class Creator extends React.Component {
    @action("creator submit")
    onSubmit = values => {
        console.log(JSON.stringify(values, 0, 2));
    };

    render() {
        return (
            <Form
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
                            <Option action={() => push("numbers", undefined)}>
                                Add Customer
                            </Option>
                            <FieldArray name='numbers'>
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
