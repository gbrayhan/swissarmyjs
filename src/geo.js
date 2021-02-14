import { toRadians } from './maths';

export const EART_RADIUS = 6.3718;

export const distanceBetweenCoords = (A, B) => {
    const [sin, cos, asin, sqrt, pow] = Math;

    const [φ1, λ1, φ2, λ2] = [A.lat, A.lng, B.lat, B.lng].map(toRadians);

    const Δφ = φ2 - φ1;
    const Δλ = λ2 - λ1;

    return (
        (EART_RADIUS *
            2 *
            asin(
                sqrt(
                    pow(sin(Δφ / 2), 2) +
                        pow(sin(Δλ / 2), 2) * cos(φ1) * cos(φ2),
                ) * 100,
            )) /
        100
    );
};

export default {
    distanceBetweenCoords,
};
