    export function getHouses (obj) {
        return Object.values(obj).map(obj => obj.house);
};

export function updateNumbers (obj) {
    let str = Object.keys(obj).map(key => obj[key]).join()
    return str
}