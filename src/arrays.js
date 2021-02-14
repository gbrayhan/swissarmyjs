import { random } from './maths';

export const sequence = (size) => Array.from(Array(size), (_, index) => index);

export const chunk = (array, chunkSize) =>
    new Array(Math.ceil(array.length / chunkSize))
        .fill()
        .map(() => array.splice(0, chunkSize));

export const shuffle = (array) => {
    let arrayCopy = [...array];
    let currentIndex = arrayCopy.length;

    let temporaryValue = null;
    let randomIndex = null;

    while (0 !== currentIndex) {
        randomIndex = random(0, currentIndex);
        currentIndex -= 1;

        temporaryValue = arrayCopy[currentIndex];
        arrayCopy[currentIndex] = arrayCopy[randomIndex];
        arrayCopy[randomIndex] = temporaryValue;
    }
    return arr;
};

export default {
    sequence,
    chunk,
    shuffle,
};
