import { Field } from "react-final-form";
import { StyledButton as Btn } from "./Styles";
import { Input } from "./Styles";

export const Button = ({ action, children, className, ...rest }) => (
    <Btn
        type={rest.type ? rest.type : "button"}
        onClick={action}
        className={className}
        name={rest.name}
    >
        {children}
    </Btn>
);

export const FieldValidating = ({ name, validate, type, placeholder }) => (
    <Field name={name} validate={validate}>
        {({ input, meta }) => (
            <>
                {meta.error && meta.touched && <span>{meta.error}</span>}
                <Input {...input} type={type} placeholder={placeholder} />
            </>
        )}
    </Field>
);
