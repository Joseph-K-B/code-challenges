export function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

export function stringItUp(arr){
   return arr.map ((num)=> num.toString())
}

export function capitalizeNames(arr){
  return arr.map ((names) => names[0].toUpperCase() + names.slice(1).toLowerCase())
}

export function namesOnly(arr){
  return arr.map((names) => names.name)
}

// export function makeStrings(arr){
//     arr.map ((ages) => ages.age)
//     let string = arr
//   if (string > 18) 
//   return string.name + ' can go to The Matrix'
//   else return string.name + ' is under age!!'
// }

export function makeStrings(arr){
   if (arr.map ((ages) => ages.age > 18)
  return ages.name + ' can go to The Matrix')
  else return ages.name + ' is under age!!'
}