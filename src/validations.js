export const noEmptyString = (errorMessage) => ({
    check: (value) => Boolean(value) && typeof value === 'string',
    errorMessage: errorMessage || "The value can't be empty",
});

export const hasMinLength = (minLength = 6, errorMessage) => ({
    check: (value) => value.length >= minLength,
    errorMessage:
        errorMessage ||
        `The value can't have less than ${minLength} characters`,
});

export const hasOnlyNumbers = (errorMessage) => ({
    check: (value) => /^\d+$/.test(value),
    errorMessage: errorMessage || `The value must contain only numbers`,
});

export const hasLetters = (errorMessage) => ({
    check: (value) => /[a-zA-Z]/.test(value),
    errorMessage: errorMessage || `The value must contain at least one letter`,
});

export const isValidName = (errorMessage) => ({
    check: (value) => /^[a-z ]+$/i.test(value),
    errorMessage:
        errorMessage || `The value must contain only letters and spaces`,
});

export const isValidComplexName = (errorMessage) => ({
    check: (value) => /^[0-9a-zA-ZÀ-ÿ \u00f1\u00d1]+$/g.test(value),
    errorMessage:
        errorMessage || `The value must contain any valid name character`,
});

export const isValidBuildingNumber = (errorMessage) => ({
    check: (value) => /^[0-9a-zA-Z-]+$/g.test(value),
    errorMessage:
        errorMessage || `The value must contain any valid name character`,
});

export const hasCapitalLetters = (errorMessage) => ({
    check: (value) => /[A-Z]/.test(value),
    errorMessage:
        errorMessage || `The value must contain at least one capital letter`,
});

export const isValidAddress = (errorMessage) => ({
    check: (value) => /^[a-z0-9- .]+$/i.test(value),
    errorMessage:
        errorMessage ||
        `The value must contain only letters, numbers, spaces and dashes`,
});

export const isAlphaNumeric = (errorMessage) => ({
    check: (value) => /^[a-z0-9]+$/i.test(value),
    errorMessage:
        errorMessage || `The value must contain only letters or numbers`,
});

export const hasNumbers = (errorMessage) => ({
    check: (value) => /[0-9]/.test(value),
    errorMessage:
        errorMessage || `The value must contain at least one number digit`,
});

export const validateRules = (value, rules) => {
    const errors = [];
    rules.forEach((rule) => {
        if (!rule.check(value)) {
            errors.push({
                message: rule.errorMessage,
            });
        }
    });
    return errors;
};

export const isEmail = (errorMessage) => ({
    check: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value),
    errorMessage: errorMessage || `The value must be an email`,
});

export const validator = (value, validations) =>
    (
        validations.find((validation) => !validation.check(value)) || {
            errorMessage: null,
        }
    ).errorMessage;
