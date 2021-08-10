export function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

export function stringItUp(arr){
   return arr.map ((num)=> num.toString())
}

export function capitalizeNames(arr){
  return arr.map ((names) => names[0].toUpperCase() + names.slice(1).toLowerCase())
}