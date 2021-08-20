    export function getHouses (obj) {
        return Object.values(obj).map(obj => obj.house);
};

export function updateNumbers (obj) {
    return  Object.values(obj).map(obj => `${obj[0]}``${obj[1]}``${obj[2]}`)
    
}

export function totalCharacters(arr) {
    let characters = [];
    Object.values(arr).forEach( arr => {
        characters++;
        characters += arr.children.length;
        if (arr.spouse) characters ++;
    });
    return characters
}