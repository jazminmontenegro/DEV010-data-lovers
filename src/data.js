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
//TODO funcion de cambiar texto por familia. Por hacer/ opcional.
  },

  shield: function (w){
//TODO funcion de cambiar escudo por familia. Por hacer/ opcional.
  },

  history: function (h){
//TODO funcion de cambiar historia por familia. Por hacer/opcional.
  }
}

// export const order= {}   //TODO funcion de ordenar, por hacer.

// export const survivors= {} //TODO funcion de conteo, por hacer.

export default searcher
