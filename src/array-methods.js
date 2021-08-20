export function howMuchPencil(str) {
    const arr = []
    for(let x = -1; x < str.length; x++) {
        arr.push(str.slice (x + 1));
    }
    return arr
}