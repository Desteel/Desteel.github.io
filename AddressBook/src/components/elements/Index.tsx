import * as React from 'react';
import { StyledButton as Btn } from './Styles';

interface BtnProps {
    action: any;
    className: string;
    type: 'button' | 'submit' | 'reset';
    name: string;
}

export const Button: React.FunctionComponent<BtnProps> = ({
    action,
    children,
    className,
    ...rest
}) => (
    <Btn
        type={rest.type ? rest.type : 'button'}
        onClick={action}
        className={className}
        name={rest.name}
    >
        {children}
    </Btn>
);

interface InputProps {
    input: any;
    meta: any;
}

export const InputValidating: React.FunctionComponent<InputProps> =  ({ input, meta, ...rest }) => (
    <>
        {meta.error && meta.touched && <span>{meta.error}</span>}
        <input {...input} {...rest} />
    </>
);
