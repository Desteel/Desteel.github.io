import * as React from 'react';
import { StyledButton } from './Styles';

interface IButtonProps {
    action: any;
    className: string;
    type: 'button' | 'submit' | 'reset';
    name: string;
}

interface IInputProps {
    input: any;
    meta: any;
}

export const Button: React.FunctionComponent<IButtonProps> = ({
    action,
    children,
    className,
    ...rest
}) => (
    <StyledButton
        type={rest.type ? rest.type : 'button'}
        onClick={action}
        className={className}
        name={rest.name}
    >
        {children}
    </StyledButton>
);

export const InputValidating: React.FunctionComponent<IInputProps> = ({
    input,
    meta,
    ...rest
}) => (
    <>
        {meta.error && meta.touched && <span>{meta.error}</span>}
        <input {...input} {...rest} />
    </>
);
