export function evensOnly(arr) {
    return arr.filter((num) => 
    num % 2 === 0);
}

export function fiveOrLess(arr) {
        return arr.filter((input) => {
        return input.length <= 5;
    });
}