import { fiveAndGreaterOnly, evensOnly, fiveOrLess, peopleWhoBelongToTheIlluminati, ofAge } from './arrray-filter.js'

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
    const input = ['dog', 'wolf', 'family', 'eaten', 'camping'];
    const output = fiveOrLess(input);
    expect(output).toEqual(['dog', 'wolf', 'eaten']);
  });

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

  test ('can see the matrix', () =>{
    const input = [
      { name: 'Angelina Jolie', age: 80 },
      { name: 'Eric Jones', age: 2 },
      { name: 'Paris Hilton', age: 5 },
      { name: 'Kayne West', age: 16 },
      { name: 'Bob Ziroll', age: 100 }
  ]
  const output = ofAge(input)
  expect(output).toEqual(
    [ 
      { name: 'Angelina Jolie', age: 80 },
      { name: 'Bob Ziroll', age: 100 } 
  ]
  )
  })