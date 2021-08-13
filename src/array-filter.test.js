import { fiveAndGreaterOnly, evensOnly, fiveOrLess } from './arrray-filter.js'

test('Five and greater only', () => {
  const input = [3, 6, 8, 2]; // arrange
  const output = fiveAndGreaterOnly(input); // act
  expect(output).toEqual([6, 8]); // assert
});

test('return even numbers only', () => {
    const input = [3, 6, 8, 2]; // arrange
    const output = evensOnly(input); // act
    expect(output).toEqual([6, 8, 2]); // assert
  });

  test('five characters || <', () =>{
    const input = ['apple', 'banana', 'corn', 'kiwi'];
    const output = fiveOrLess(input);
    expect(output).toEqual(['apple', 'corn', 'kiwi'])
  } )