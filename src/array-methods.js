export function howMuchPencil(str) {
    const arr = []
    for(let x = -1; x < str.length; x++) {
        arr.push(str.slice (x + 1));
    }
    return arr
}

export function wordsToCharList(arr) {
    let array = []
    for(let x = 0; x < arr.length; x++) {
        array.push(arr[x]);
    }
    return array;
}