export function returnTen(str) {
    return Array.from(str).slice(-10)
}

export function totalSum(matrix) {
   return matrix.flat(1).reduce((x, y) => {
       return x + y;
   })
}
