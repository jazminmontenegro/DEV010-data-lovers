// estas funciones son de ejemplo

/*export const example = () => {
  return 'example';
};

export const anotherExample = () => {
  return 'OMG';
};*/

import data from './data/got/got.js';
export function buscar(data, palabra) {  //funcion buscar

  return data.got.filter(index => index.fullName.toLowerCase().includes(palabra)) //retorna Esto se utiliza para filtrar el arreglo en base a una condición. Se creará un nuevo arreglo con los elementos que cumplan con la condición.

}

const houseFilter= {

  cards: function (x) {
    const result = data.got.filter(item=> item.family.includes(x));
    return result
  }
}
export default houseFilter
