import { filterData,houseFilter,mottoFilter} from '../src/data.js';

describe('funcion filterData', () => {
  it('is a function', () => {
    expect(typeof filterData).toBe('function');
  });

  it('returns si la funcion se cumple', () => {
    const data={
      "got":[
        {
          "id": 0,
          "firstName": "Daenerys",
          "lastName": "Targaryen",
          "fullName": "Daenerys Targaryen",
          "title": "Queen of Meereen, Khaleesi of Great Grass Sea, Breaker of Shackles, and Mother of Dragons",
          "family": "House Targaryen",
          "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
          "born": "284 DC"
        },
        {
          "id": 1,
          "firstName": "Samwell",
          "lastName": "Tarly",
          "fullName": "Samwell Tarly",
          "title": "Maester",
          "family": "House Tarly",
          "imageUrl": "https://thronesapi.com/assets/images/sam.jpg",
          "born": "283 DC"
        },
        {
          "id": 2,
          "firstName": "Jon",
          "lastName": "Snow",
          "fullName": "Jon Snow",
          "title": "King of the North and Lord Commander of the Knight's Watch",
          "family": "House Stark",
          "imageUrl": "https://thronesapi.com/assets/images/jon-snow.jpg",
          "born": "283 DC"
        },]}

    const palabra= "daenerys targaryen"
    expect(filterData(data, palabra)).toEqual( [{
      "id": 0,
      "firstName": "Daenerys",
      "lastName": "Targaryen",
      "fullName": "Daenerys Targaryen",
      "title": "Queen of Meereen, Khaleesi of Great Grass Sea, Breaker of Shackles, and Mother of Dragons",
      "family": "House Targaryen",
      "imageUrl": "https://thronesapi.com/assets/images/daenerys.jpg",
      "born": "284 DC"
    }]);
  });
});

describe('funcion houseFilter', () => {
  it('is a function', () => {
    expect(typeof houseFilter).toBe('function');
  });
});

it('returns lo que tiene en houseFilter', () => {
  const data= { "got":[{
    "id": 6,
    "firstName": "Ned",
    "lastName": "Stark",
    "fullName": "Ned Stark",
    "title": "Lord of Winterfell",
    "family": "House Stark",
    "imageUrl": "https://thronesapi.com/assets/images/ned-stark.jpg",
    "born": "263 DC"
  },
  {
    "id": 7,
    "firstName": "Robert",
    "lastName": "Baratheon",
    "fullName": "Robert Baratheon",
    "title": "King of the Seven Kingdoms",
    "family": "House Baratheon",
    "imageUrl": "https://thronesapi.com/assets/images/robert-baratheon.jpeg",
    "born": "262 DC"
  },
  {
    "id": 8,
    "firstName": "Jamie",
    "lastName": "Lannister",
    "fullName": "Jamie Lannister",
    "title": "Lord Commander of the Kingsguard",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg",
    "born": "262 DC",
    "death": "305 DC"
  },
  {
    "id": 9,
    "firstName": "Cersei",
    "lastName": "Lannister",
    "fullName": "Cersei Lannister",
    "title": "Lady of Casterly Rock",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg",
    "born": "262 DC",
    "death": "305 DC"
  },]}
  const filter="Lannister"
  expect(houseFilter(data, filter)).toEqual([{
    "id": 8,
    "firstName": "Jamie",
    "lastName": "Lannister",
    "fullName": "Jamie Lannister",
    "title": "Lord Commander of the Kingsguard",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/jaime-lannister.jpg",
    "born": "262 DC",
    "death": "305 DC"

  },
  {
    "id": 9,
    "firstName": "Cersei",
    "lastName": "Lannister",
    "fullName": "Cersei Lannister",
    "title": "Lady of Casterly Rock",
    "family": "Lannister",
    "imageUrl": "https://thronesapi.com/assets/images/cersei.jpg",
    "born": "262 DC",
    "death": "305 DC"
  }]);
});

describe('mottoFilter', () => {

  it('should be an object', () => {
    expect(typeof mottoFilter).toBe("object");
  });

  describe('mottoFilter.mottoFilterFunction', () => {

    it('function', () => {
      expect(typeof mottoFilter.mottoFilterFunction).toBe('function');
    });
  });
})
/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
/*describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });
});*/
