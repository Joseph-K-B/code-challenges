export function capitalizeObjectKeys(obj) {
    return Object.keys(obj).map(obj => obj.toUpperCase());
}