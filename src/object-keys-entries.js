export function capitalizeObjectKeys(obj) {
    return Object.keys(obj).map(obj => obj.toUpperCase());
}

export function sortedKeys(obj) {
    return Object.keys(obj).sort((x, y) => x.length - y.length);
}

export function getFilteredKey(obj) {
    const data = Object.keys(obj);
    return data.filter((obj) => obj === data[2]) 
}

export function getArrayOfKeysAndValues(obj){
    return Object.entries(obj);
}