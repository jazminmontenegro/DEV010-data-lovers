import data from './data/got/got.js';
//import dataMotto from "./src/data/got/motto.js";


const container= document.querySelector('.card')
for (let i=0 ; i<data.got.length; i++){
  //console.log(data.got[i]);
  container.innerHTML += `<figure>
  <img src=${data.got[i].imageUrl}>
  <figcaption>${data.got[i].firstName}</figcaption>
  </figure>`
}


//Funciones para selector de familia

/*function familyselect(selection, ){
  for (let i=0 ; i<dataMotto.motto.length; i++){
    console.log(selection);
  }
}
//CONSTANTES NECESARIAS PARA MOSTRAR POR CASA


let selection = document.getElementById(family.value)
selection = selection.addEventListener('change',familyselect)

//Eventos relacionados
*/