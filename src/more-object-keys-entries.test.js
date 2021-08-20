import { getHouses, hasChildrenEntries, sortByChildren, totalCharacters, updateNumbers } from './more-object-keys-entries.js';


test('it gets the names of the houses', () => {
  const characters = [
    {
      name: 'Eddard',
      spouse: 'Catelyn',
      children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
      house: 'Stark'
    },
    {
      name: 'Jon A.',
      spouse: 'Lysa',
      children: ['Robin'],
      house: 'Arryn'
    },
    {
      name: 'Cersei',
      spouse: 'Robert',
      children: ['Joffrey', 'Myrcella', 'Tommen'],
      house: 'Lannister'
    },
    {
      name: 'Daenarys',
      spouse: 'Khal Drogo',
      children: ['Drogon', 'Rhaegal', 'Viserion'],
      house: 'Targaryen'
    },
    {
      name: 'Mace',
      spouse: 'Alerie',
      children: ['Margaery', 'Loras'],
      house: 'Tyrell'
    },
    {
      name: 'Euron',
      spouse: null,
      children: [],
      house: 'Greyjoy'
    },
    {
      name: 'Jon S.',
      spouse: null,
      children: [],
      house: 'Snow'
    }
  ]; //arrange
  const output = getHouses(characters); //act
  expect(output).toEqual(['Greyjoy', 'Snow', 'Stark', 'Arryn', 'Tyrell', 'Lannister', 'Targaryen']); //assert
});

test('it updates the numbers', () => {
    const numbers = [{
        'Grace Hopper': '222-303-5938', 
        'Ada Lovelace': '222-349-9842', 
        'Alan Turing': '222-853-5933'}  
    ]; //arrange
    const output = updateNumbers(numbers); //act
    expect(output).toEqual(['Grace Hopper: 222-303-5938','Ada Lovelace: 222-349-9842','Alan Turing: 222-853-5933']); //assert
  });

  test('it gets total characters', () => {
    const characters = [
      {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
      },
      {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
      },
      {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
      },
      {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
      },
      {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
      },
      {
        name: 'Euron',
        spouse: null,
        children: [],
        house: 'Greyjoy'
      },
      {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
      }
    ]; //arrange
    const output = totalCharacters(characters); //act
    expect(output).toEqual(26); //assert
  });

  test('character has children true/false', () => {
    const characters = [
      {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
      },
      {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
      },
      {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
      },
      {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
      },
      {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
      },
      {
        name: 'Euron',
        spouse: null,
        children: [],
        house: 'Greyjoy'
      },
      {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
      }
    ]; //arrange
    const output = hasChildrenEntries(characters, 'Eddard'); //act
    expect(output).toEqual(true); //assert
    const output2 = hasChildrenEntries(characters, 'Euron');
    expect (output2).toEqual(false);
  });

  

  test('sorts by children', () => {
    const characters = [
      {
        name: 'Eddard',
        spouse: 'Catelyn',
        children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'],
        house: 'Stark'
      },
      {
        name: 'Jon A.',
        spouse: 'Lysa',
        children: ['Robin'],
        house: 'Arryn'
      },
      {
        name: 'Cersei',
        spouse: 'Robert',
        children: ['Joffrey', 'Myrcella', 'Tommen'],
        house: 'Lannister'
      },
      {
        name: 'Daenarys',
        spouse: 'Khal Drogo',
        children: ['Drogon', 'Rhaegal', 'Viserion'],
        house: 'Targaryen'
      },
      {
        name: 'Mace',
        spouse: 'Alerie',
        children: ['Margaery', 'Loras'],
        house: 'Tyrell'
      },
      {
        name: 'Euron',
        spouse: null,
        children: [],
        house: 'Greyjoy'
      },
      {
        name: 'Jon S.',
        spouse: null,
        children: [],
        house: 'Snow'
      }
    ]; //arrange
    const output = sortByChildren(); //act
    expect(output).toEqual(
        [ {name: 'Euron', spouse: null, children: [], house: 'Greyjoy'},
        { name: 'Jon S.', spouse: null, children: [],house: 'Snow'},
        {name: 'Jon A.', spouse: 'Lysa', children: ['Robin'], house: 'Arryn'},
        {name: 'Mace', spouse: 'Alerie', children: ['Margaery', 'Loras'], house: 'Tyrell'},
        { name: 'Cersei',spouse: 'Robert', children: ['Joffrey', 'Myrcella', 'Tommen'], house: 'Lannister'}, 
        {name: 'Daenarys', spouse: 'Khal Drogo', children: ['Drogon', 'Rhaegal', 'Viserion'], house: 'Targaryen'},
        {name: 'Eddard', spouse: 'Catelyn', children: ['Robb', 'Sansa', 'Arya', 'Bran', 'Rickon'], house: 'Stark'}]); //assert
    
  });