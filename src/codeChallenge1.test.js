import { capitalizeNames, doubleNumbers } from './codeChallenge1.js';
import { stringItUp } from './codeChallenge1.js'

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});

test('stringify numbers', () => {
    const input = [2, 5, 100]; // arrange
    const output = stringItUp(input); // act
    expect(output).toEqual(['2', '5', '100']); // assert
  });

  test('capitalize names', () => {
    const input = ["john", "JACOB", "jinGleHeimer", "schmidt"]; // arrange
    const output = capitalizeNames(input); // act
    expect(output).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]); // assert
  });