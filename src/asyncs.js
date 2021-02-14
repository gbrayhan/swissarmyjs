export const delay = (time, withReject = false) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (withReject) {
                reject();
            } else {
                resolve();
            }
        }, time);
    });
};

export default {
    delay,
};
