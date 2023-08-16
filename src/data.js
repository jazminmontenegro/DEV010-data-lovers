
export function filterData(data, palabra) {  //funcion buscar
  const filterlook= data.got.filter(index => index.fullName.toLowerCase().includes(palabra)) //retorna Esto se utiliza para filtrar el arreglo en base a una condición. Se creará un nuevo arreglo con los elementos que cumplan con la condición.
  return filterlook
}


export function houseFilter(data, filter) {
  return data.got.filter(item => item.family.includes(filter));

}

export function sortData(data, order) {
  const orderData = data;//ca,bie era let por si acaso
  console.log(orderData)
  const prueba = orderData.got.sort((a, b) => {
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
  if (order === 'Ascendente') {
    // console.log(prueba);
    return prueba
  }
  if (order === 'Descendente') {
    //console.log([...prueba].reverse());
    return [...prueba].reverse()
  }
  //console.log(orderData);
}








