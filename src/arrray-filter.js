export function fiveAndGreaterOnly(arr) {
    return arr.filter((num) =>
    num >= 5)
}
export function evensOnly(arr) {
    return arr.filter((num) => 
    num % 2 === 0);
}

export function fiveOrLess(arr) {
        return arr.filter((item) => {
        return item.length <= 5;
    });
}

export function peopleWhoBelongToTheIlluminati(arr){
  return arr.filter((item) => {
      return item.member === true;
  })
}