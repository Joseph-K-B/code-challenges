import { capitalizeNames, doubleNumbers, namesOnly } from './codeChallenge1.js';
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

  test('return names', () => {
    const input = [
      {
          name: "Angelina Jolie",
          age: 80
      },
      {
          name: "Eric Jones",
          age: 2
      },
      {
          name: "Paris Hilton",
          age: 5
      },
      {
          name: "Kayne West",
          age: 16
      },
      {
          name: "Bob Ziroll",
          age: 100
      }
  ]; // arrange
    const output = namesOnly(input); // act
    expect(output).toEqual([
      "Angelina Jolie", 
      "Eric Jones", 
      "Paris Hilton", 
      "Kayne West", 
      "Bob Ziroll"
  ]); // assert
  });