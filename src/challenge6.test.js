import { totalSum } from "./challenge6.js";

test('calculates total sum of numbers in arrays', ()=> {
    const input = [[13,24,24,2], [2,5,6], [2,3]]
    const output = totalSum(input)
    expect(output).toEqual(81)
})