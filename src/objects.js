export const findByPath = (obj, path) => {
    const results = path.split('.').reduce((found, current) => {
        if (!found[current]) {
            return [null];
        }
        return found[current];
    }, obj);
    return results[0] !== null ? results : undefined;
};

export const forEachObject = (obj, iterator) => {
    const keys = Object.keys(obj);
    Object.values(obj).forEach((item, i) => {
        iterator(item, keys[i]);
    });
};

export const mapObject = (obj, iterator) => {
    const keys = Object.keys(obj);
    return Object.values(obj).map((item, i) => {
        return iterator(item, keys[i]);
    });
};

export default {
    findByPath,
    forEachObject,
    mapObject,
};
