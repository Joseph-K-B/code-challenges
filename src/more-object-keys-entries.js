    export function getHouses (obj) {
        return Object.values(obj).map(obj => obj.house);
};

export function updateNumbers (obj) {
    return  Object.values(obj).map((val) => [toString(val), obj[val]] );    
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

export function hasChildrenEntries(arr, character) {
    Object.entries(arr).map( arr => {
        if (arr.children)
        return true
        else return false
    })
}

export function sortByChildren(arr){
   
   arr.sort()(arr => {
       if (arr.children (x, y) => x.children.length)
   })
} 

