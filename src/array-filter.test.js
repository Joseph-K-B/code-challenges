import { fiveAndGreaterOnly, evensOnly, fiveOrLess, peopleWhoBelongToTheIlluminati } from './arrray-filter.js'

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
    const input = ['dog', 'wolf', 'by', 'family', 'eaten', 'camping'];
    const output = fiveOrLess(input);
    expect(output).toEqual(['by', 'dog', 'wolf', 'eaten'])
  } )

  test('illuminati members', () =>{
    const input = [
      { name: 'Angelina Jolie', member: true },
      { name: 'Eric Jones', member: false },
      { name: 'Paris Hilton', member: true },
      { name: 'Kayne West', member: false },
      { name: 'Bob Ziroll', member: true }]
    const output = peopleWhoBelongToTheIlluminati(input)
    expect(output).toEqual(
    [
      { name: 'Angelina Jolie', member: true }, 
      { name: 'Paris Hilton', member: true }, 
      { name: 'Bob Ziroll', member: true }])
  })