export function capitalizeObjectKeys(item) {
    return Object.keys(item).map(item => item.toUpperCase());
}

export function sortedKeys(item) {
    return Object.keys(item).sort((x, y) => x.length - y.length);
}

export function getFilteredKey(item) {
    const data = Object.keys(item);
    return data.filter((item) => item === data[2]) 
}

