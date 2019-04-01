import { StyledButton as Btn } from './Styles';

export const Button = ({ action, children, className, ...rest }) => (
    <Btn
        type={rest.type ? rest.type : 'button'}
        onClick={action}
        className={className}
        name={rest.name}
    >
        {children}
    </Btn>
);

export const InputValidating = ({ input, meta, ...rest }) => (
    <>
        {meta.error && meta.touched && <span>{meta.error}</span>}
        <input {...input} {...rest} />
    </>
);
