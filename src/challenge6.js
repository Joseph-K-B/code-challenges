export function returnTen(str) {
    return Array.from(str).slice(-10)
}

export function findMax(matrix) {
    return matrix.flat(1).sort((x, y) => y - x)[0];
}

export function totalSum(matrix) {
   return matrix.flat(1).reduce((x, y) => x + y)
}

export function grandTotal(stores){
  
}