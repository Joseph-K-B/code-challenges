import { totalSum, returnTen, findMax } from "./challenge6.js";

test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });

  test('it should return the highest value within all sub-arrays', () => {
    const input = [[13,24,24,2], [2,5,6], [2,3]]
    const output = findMax(input)
    expect(output).toEqual(24)
  });

test('calculates total sum of numbers in arrays', ()=> {
    const input = [[13,24,24,2], [2,5,6], [2,3]]
    const output = totalSum(input)
    expect(output).toEqual(81)
})

test('calculates total cookie sales for each hour', ()=> {
    const hoursOpen = ['9 a.m.', '10 a.m.', '11 a.m.', '12 p.m.', '1 p.m.', '2 p.m.', '3 p.m.', '4 p.m.', '5 p.m.', '6 p.m.', '7 p.m.', '8 p.m.'];

    const firstPike = [17, 18, 23, 24, 24, 12, 13, 27, 30, 20, 24, 18];
    const seaTac = [26, 5, 5, 59, 23, 39, 38, 20, 30, 7, 59, 43];
    const seattleCenter = [7, 14, 19, 22, 15, 4, 23, 27, 28, 23, 1, 29];
    const capHill = [5, 85, 58, 51, 50, 13, 33, 32, 47, 94, 31, 62];
    const alkiBeach = [33, 31, 147, 130, 27, 93, 38, 126, 141, 63, 46, 17];

    const cookieStores = [firstPike, seaTac, seattleCenter, capHill, alkiBeach];
})