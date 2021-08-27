export function sortByChildren(charArray){
    return charArray.sort ((x, y) => x.children.length - y.children.length)
};


export function containsW(str){
    return str.match(/w/) ? true : false;
}

