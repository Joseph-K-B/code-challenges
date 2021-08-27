import { totalSum, returnTen } from "./challenge6.js";

test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });

test('calculates total sum of numbers in arrays', ()=> {
    const input = [[13,24,24,2], [2,5,6], [2,3]]
    const output = totalSum(input)
    expect(output).toEqual(81)
})