import { isNumeric } from "./";

export const required = value => (value ? undefined : "Required");

export const mustBeNumber = value =>
    isNumeric(value) ? undefined : "Must be a number";

export const minLength = min => value =>
    isNumeric(value) && value.length >= min ? undefined : `Min length ${min}`;

export const composeValidators = (...validators) => value =>
    validators.reduce(
        (error, validator) => error || validator(value),
        undefined
    );
