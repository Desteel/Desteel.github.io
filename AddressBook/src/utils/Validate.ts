import { isNumeric } from '.';

interface validatorsRest {
    mustBeNumber(): string;
    minLength(): string;
    required(): string;
}

export const required = (value: string) => (value ? undefined : 'Required');

export const mustBeNumber = (value: string) =>
    isNumeric(value) ? undefined : 'Must be a number';

export const minLength = (min: number) => (value: string) =>
    isNumeric(value) && value.length >= min ? undefined : `Min length ${min}`;

export const composeValidators = (...validators: validatorsRest[]) => (
    value: string
) =>
    validators.reduce(
        (error, validator) => error || validator(value),
        undefined
    );
