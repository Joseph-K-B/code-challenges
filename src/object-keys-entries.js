export function capitalizeObjectKeys(obj) {
    return Object.keys(obj).map(obj => obj.toUpperCase());
}

export function sortedKeys(obj) {
    return Object.keys(obj).sort((x, y) => x.length - y.length);
}