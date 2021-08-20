export function howMuchPencil(str) {
    const arr = []
    for(let x = -1; x < str.length; x++) {
        arr.push(str.slice (x + 1));
    }
    return arr
}

export function wordsToCharList(arr) {
    let array = []
    for(let x = 0; x < arr.length; x++) {
        array.push(arr[x]);
    }
    return array;
}

export function listFoods(recipe){
  return recipe.ingredients.map(str => str.split(' ').slice(2).join(' '))
}

export function stepActions(recipe) {
    return recipe.steps.map(str => str.split(' ').slice(0, 1).join(' '));
}

export function removeLastCharacters(str, numberOfCharacters){
    return str.slice(0, str.length -numberOfCharacters, )
}