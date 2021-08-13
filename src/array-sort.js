

export function leastToGreatest(arr){
  return arr.sort((x, y) => x - y);
}

export function greatestToLeast(arr){
    return arr.sort((x, y) => y - x);
  }

  export function lengthSort(arr){
    return arr.sort ((x, y) => x.length - y.length)
}

export function alphabetical(arr){
  return arr.sort ();
}

export function byAge(arr){
  return arr.sort((x, y) => x.age - y.age)
}