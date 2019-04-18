import { isNumeric } from '.';

interface returnString {
    (value: string): string;
    // (min: number): string;

    // (foo: string, bar?: number, ...others: boolean[]): number;
}

export const required: (value: string) => string | undefined = value =>
    value ? undefined : 'Required';

export const mustBeNumber: (value: string) => string | undefined = value =>
    isNumeric(value) ? undefined : 'Must be a number';

export const minLength = (min: number) => (value: string) =>
    isNumeric(value) && value.length >= min ? undefined : `Min length ${min}`;

export const composeValidators = (...validators) => (value: string) =>
    validators.reduce(
        (error, validator) => error || validator(value),
        undefined
    );
