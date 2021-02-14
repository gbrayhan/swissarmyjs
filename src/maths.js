export const π = Math.PI;

export const toRadians = (num) => (num / 180) * π;

export const random = (min = 0, max = 100) => Math.random() * (max - min) + min;

export default {
    toRadians,
    random,
};
