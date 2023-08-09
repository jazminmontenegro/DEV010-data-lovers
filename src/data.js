import data from './data/got/got.js';

const searcher = {

  filterFamily: function (searched) {
    const filteredData = data.got.filter(item => item.fullName.toLowerCase().includes(searched.toLowerCase()));
    return filteredData
  }
}

export const houseFilter= {

  cards: function (x) {
    const result = data.got.filter(item=> item.family.includes(x));
    return result
  },

  motto: function (y) {

  },

  shield: function (w){

  },

  history: function (h){

  }
}

export default searcher
