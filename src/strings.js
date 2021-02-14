export const toKebabCase = (str) =>
    str &&
    str
        .match(
            /[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g,
        )
        .map((x) => x.toLowerCase())
        .join('-');

export const toCamelCase = (str) =>
    str
        .toLowerCase()
        .replace(/[^a-zA-Z0-9]+(.)/g, (_, chr) => chr.toUpperCase());

export const toPascalCase = (str) =>
    str
        .replace(
            /\w\S*/g,
            (m) => m.charAt(0).toUpperCase() + m.substr(1).toLowerCase(),
        )
        .split(' ')
        .join('');

export const isEmoji = (text) => {
    const regex = /(\u00a9|\u00ae|[\u2000-\u3300]|\ud83c[\ud000-\udfff]|\ud83d[\ud000-\udfff]|\ud83e[\ud000-\udfff])/g;
    return regex.test(text);
};

export default {
    toKebabCase,
    toCamelCase,
    toPascalCase,
    isEmoji,
};
