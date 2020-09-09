import { isNumeric } from './utils';

export const required = (value: string) => (value ? undefined : 'Required');

export const mustBeNumber = (value: string) =>
    isNumeric(value) ? undefined : 'Must be a number';

export const minLength = (min: number) => (value: string) =>
    isNumeric(value) && value.length >= min ? undefined : `Min length ${min}`;

interface IValidators {
    (value: string): string | undefined;
}
export const composeValidators = (...validators: Array<IValidators>) => (
    value: string
) =>
    validators.reduce(
        (error, validator) => error || validator(value),
        undefined
    );
