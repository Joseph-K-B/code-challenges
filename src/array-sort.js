

export function leastToGreatest(arr){
  return arr.sort((x, y) => x - y);
}

export function greatestToLeast(arr){
    return arr.sort((x, y) => y - x);
  }