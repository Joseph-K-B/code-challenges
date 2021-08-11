import React from "react";

export function doubleNumbers(arr) {
  return arr.map((num) => num * 2);
}

export function stringItUp(arr){
   return arr.map ((num) => num.toString())
}

export function capitalizeNames(arr){
  return arr.map ((names) => names[0].toUpperCase() + names.slice(1).toLowerCase())
}

export function namesOnly(arr){
  return arr.map((names) => names.name)
}

export function makeStrings(arr){
   return arr.map ((ages) =>{
    
    if ( ages.age > 18 ) {
      return ages.name.toString() + ' can go to The Matrix';
    }
    else { 
      return ages.name.toString() + ' is under age!!';
    }
  })
}
// export function makeStrings(arr){
//    if (arr.map ((item) => item.age > 18)
//   return item.name + ' can go to The Matrix'
//   else return item.name + ' is under age!!'
//    )}

   export function readyToPutInTheDOM(arr){
    return arr.map((item) => {
        const dom = `<h1>${item.name}</h1><h2>${item.age}</h2>`
        return dom;
     })
    }