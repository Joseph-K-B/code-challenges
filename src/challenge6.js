export function totalSum(matrix) {
    let sum = 0;
    for (let i = 0; i < matrix.length; ++i){
        sum += matrix[i];
    }
    // if (typeof matrix[i] == 'object')
    // sum += totalSum(matrix[i]);
    // else
    //     sum += matrix[i];
    return sum;
}

totalSum(Array)