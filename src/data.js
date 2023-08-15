import data from './data/got/got.js';
import data2 from "./data/got/motto.js";

export const searcher = {

  searchData: function (searched) {
    const filteredData = data.got.filter(item => item.fullName.toLowerCase().includes(searched.toLowerCase()));
    return filteredData
  }
}

export const houseFilter= {

  cards: function (x) {
    const result = data.got.filter(item=> item.family.includes(x));
    return result
  },
}

export const mottoFilter= {

  mottoFilterFunction: function (g) {
    const mottoResult = data2.motto.filter(item=> item.family.includes(g));
    return mottoResult
  },
}

export function sortData(data,order){
  const orderData = data;

  const sorted = orderData.got.sort((a, b) => {
    const fullNameA = a.fullName.toLowerCase();
    const fullNameB = b.fullName.toLowerCase();
    //console.log(fullNameA, fullNameB);
    if (fullNameA < fullNameB) {
      return -1;
    }
    if (fullNameA > fullNameB) {
      return 1;
    }
    return 0;
  });

  if (order === 'ascendent') {
    // console.log(prueba);
    return sorted
  }
  if (order === 'descendent') {
    //console.log([...sorted].reverse());
    return [...sorted].reverse()
  }
}


// export const survivors= {} //TODO funcion de conteo, por hacer.

export default searcher