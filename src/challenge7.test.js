import { sortByChildren, containsW } from './challenge7.js'

test ('it sorts characters by number of children', ()=> {
    let characters = [
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
      ];

      expect (sortByChildren(characters)[0].name).toStrictEqual('Euron');
      expect (sortByChildren(characters)[1].name).toStrictEqual('Jon S.');
      expect(sortByChildren(characters)[0].children.length).toStrictEqual(0);
      expect(sortByChildren(characters)[1].children.length).toStrictEqual(0);
})

test('it should return true for w', () => {
  const input = 'hello world';
  const output = containsW(input);
  expect(output).toEqual(true);
});