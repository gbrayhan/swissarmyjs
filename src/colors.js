export const isDark = ([r, g, a]) => {
    return 180 > Math.sqrt(0.299 * (r * r) + 0.587 * (g * g) + 0.114 * (a * a));
};

export const hexToArray = (hex) => {
    const pattern = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
    const colors = pattern.exec(hex);
    colors.shift();
    return colors.map((c) => parseInt(c, 16));
};

export default {
    isDark,
    hexToArray,
};
